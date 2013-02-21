(ns time-chart-demo.bubbles
  (:require-macros [c2.util :refer [bind!]])
  (:require [time-chart-demo.chart :refer [chart]]
            [time-chart-demo.axes :refer [x-scale y-scale]]
            [cljs.reader :refer [read-string]]
            [c2.core :refer [unify]]
            [c2.util :as util]
            [c2.svg :refer [translate]]
            [c2.dom :refer [attr select]]
            [c2.event :refer [on]]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]))

;;;; BUBBLES drawer ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn draw-bubbles [bubble-specs-map]
  (bind! "#bubbles"  
         [:g#bubbles
          (unify bubble-specs-map 
                 (fn [[label specs]]
                   (let [cx (x-scale (first (specs :cx)))
                         cy (y-scale (first (specs :cy)))
                         r (first (specs :radius))
                         color (first (specs :color))]
                     [:g {:id (str "group-" label)}
                      [:g {:id (str "main-ball-" label) :class "main-bubble" :opacity 1} 
                       [:circle {:cx cx
                                 :cy cy
                                 :r r
                                 :swap-r r
                                 :stroke (chart :bubbles-stroke)
                                 :fill color
                                 :id label}]]
                      [:g {:id (str "sub-balls-" label) :class "sub-bubbles" :opacity 1}
                       (unify (specs :sub-bubbles)
                              (fn [[s-label s-specs]]
                                (let [s-cx (x-scale (first (s-specs :cx)))
                                      s-cy (y-scale (first (s-specs :cy)))
                                      s-r (first (s-specs :radius))
                                      s-color (first (s-specs :color))]
                                  [:circle {:cx s-cx
                                            :cy s-cy
                                            :r 0
                                            :swap-r s-r
                                            :stroke (chart :bubbles-stroke)
                                            :fill s-color
                                            :id s-label
                                            :transform (translate [(- cx s-cx) (- cy s-cy)])
                                            :visibility "hidden"}])))]])))]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; BUBBLES events ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn explode [ball-name]
  (-> (d3.selectAll ".main-bubble")
      (.attr "opacity" 0.2))
  (-> (d3.selectAll ".sub-bubbles")
      (.attr "opacity" 0.2))
  (-> (d3.select (str "#sub-balls-" ball-name))
      (.attr "opacity" 1))
  (let [ball-selector (str "#main-ball-" ball-name)
        sub-ball-selector (str "#sub-balls-" ball-name)]
    (-> (d3.select ball-selector)
        (.attr "r" 0)
        (.attr "visibility" "hidden")))
  (let [main-ball-selector (str "#main-ball-" ball-name " circle")
        main-ball-d3-selector (d3.selectAll main-ball-selector)
        cx (.attr main-ball-d3-selector "cx")
        cy (.attr main-ball-d3-selector "cy")
        sub-balls-group-selector (str "#sub-balls-" ball-name)
        sub-balls-selector (str sub-balls-group-selector " circle")]
    (d3map (d3.selectAll sub-balls-selector) 
           (fn [x] (let [r (.attr x "swap-r")]
                     (.attr x "r" r))))
    (-> (d3.selectAll sub-balls-selector)
        (.attr "opacity" 1)
        (.attr "visibility" "visible") 
        (.transition)
        (.duration 1500)
        (.ease "elastic")
        (.attr "transform" "")))
  (let [old-opening-order (read-string (attr (select "#bubbles") :opening-order))
        new-opening-order (conj old-opening-order ball-name)]
    (attr (select "#bubbles") :opening-order new-opening-order)))

(defn implode [ball-name] 
  (let [main-ball-group (str "#main-ball-" ball-name)
        main-ball-selector (str main-ball-group " circle")
        main-ball-d3-selector (d3.selectAll main-ball-selector)
        r (.attr main-ball-d3-selector "swap-r")
        cx (.attr main-ball-d3-selector "cx")
        cy (.attr main-ball-d3-selector "cy")
        sub-balls-group-selector (str "#sub-balls-" ball-name)
        sub-balls-selector (str sub-balls-group-selector " circle")]
    (d3map (d3.selectAll sub-balls-selector) 
           (fn [x] (let [s-cx (.attr x "cx")
                         s-cy (.attr x "cy")]
                     (-> (.transition x)
                         (.ease "quad")                       
                         (.attr "transform" (translate [(- cx s-cx) (- cy s-cy)]))))))
    (-> (d3.selectAll main-ball-group)
        (.attr "r" 0))
    (-> (d3.selectAll main-ball-group)
        (.transition)
        (.ease #(+ 0 1))
        (.delay 200)
        (.attr "r" r)
        (.attr "visibility" "visible"))
    (js/setTimeout 
     #(-> (d3.selectAll sub-balls-selector)
          (.attr "visibility" "hidden")) 200)
    (let [old-opening-order (read-string (attr (select "#bubbles") :opening-order))
          new-opening-order (vec (remove #(= % ball-name) old-opening-order))
          last-seen (last new-opening-order)]
      (-> (d3.selectAll (str "#sub-balls-" last-seen))
          (.attr "opacity" 1))
      (attr (select "#bubbles") :opening-order new-opening-order)
      (if (empty? new-opening-order)
        (-> (d3.selectAll ".main-bubble")
            (.attr "opacity" 1))))))

(defn select-main-ball [ball-name]
  (let [main-ball-group (str "#main-ball-" ball-name)]
    (-> (d3.select main-ball-group)
        (.attr "opacity" 1))))

(defn select-sub-balls [ball-name]
  (let [sub-balls-group (str "#sub-balls-" ball-name)]
    (-> (d3.select sub-balls-group)
        (.attr "opacity" 1))))

(defn deselect-main-ball [ball-name]
  (let [main-ball-group (str "#main-ball-" ball-name)
        opening-order (read-string (attr (select "#bubbles") :opening-order))
        last-seen (last opening-order)]
    (when (and (not= last-seen ball-name) (not-empty opening-order))
      (-> (d3.select main-ball-group)
          (.attr "opacity" 0.2)))))

(defn deselect-sub-balls [ball-name]
  (let [sub-balls-group (str "#sub-balls-" ball-name)
        opening-order (read-string (attr (select "#bubbles") :opening-order))
        last-seen (last opening-order)]
    (when (and (not= last-seen ball-name) (not-empty opening-order))
      (-> (d3.select sub-balls-group)
          (.attr "opacity" 0.2)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; BUBBLES definition ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn create-bubbles []
  (remote-callback :create-bubbles-remote [] (fn [remote-output] 
                                               (def bubbles remote-output)
                                               (def bubbles-names (keys bubbles)))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;