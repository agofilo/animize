(ns time-chart-demo.scrolling
  (:require-macros [c2.util :refer [bind!]])
  (:require [time-chart-demo.utils :refer [d3map]]
            [time-chart-demo.svg :refer [svg margin]]
            [time-chart-demo.chart :refer [chart]]
            [time-chart-demo.axes :refer [x-scale y-scale]]
            [time-chart-demo.bubbles :refer [bubbles bubbles-names]]
            [time-chart-demo.date :refer [dates update-date]]
            [domina :refer [by-id]]
            [domina.events :refer [dispatch!]]
            [cljs.reader :refer [read-string]]
            [c2.core :refer [unify]]
            [c2.dom :refer [style select attr val]]))

;;;; SCROLLER specifications ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def scroller {"time_scroller" {:button-margin 50
                                :width (- (chart :width) (margin :chart-right) (margin :chart-left))
                                :margin-left (+ (margin :svg-left) (margin :chart-left))
                                :margin-top (- (/ (margin :chart-bottom) 1.5))
                                :speed 500}})

(def animate? (atom false))

(def atom-timer (atom true))

(defn add-scroller [scroller-specs]
  (bind! "#scroller_container"
         [:div#scroller_container 
          (unify scroller-specs 
                 (fn [[label specs]]
                   [:div {:width (chart :width)}
                    [:span
                     [:input {:id label
                              :type "range" 
                              :min 0
                              :max (chart :t-max)
                              :value 0
                              :step 1}]
                     [:button#play-stop {:behavior "play"}  "Play"]]]))])
  (let [scroller-id (first (keys scroller-specs))
        button-margin ((scroller-specs scroller-id) :button-margin)
        width (- ((scroller-specs scroller-id) :width) button-margin)
        height ((scroller-specs scroller-id) :height)
        x-position ((scroller-specs scroller-id) :margin-left)
        y-position (+ ((scroller-specs scroller-id) :margin-top))]
    (style (select "#scroller_container") {:position "relative" 
                                           :left x-position 
                                           :top y-position})
    (style (select (str "#" scroller-id)) {:border "0px solid black" 
                                           :width width
                                           :-webkit-appearance "none"
                                           :background-color (chart :axes-stroke)
                                           :fill (chart :background-fill)})
    (style (select "#play-stop") {:float "left"})))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; TIME dependence ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn play []
  (let [time (read-string (val (select "#time_scroller")))
        the-bubbles (map #(bubbles %) bubbles-names)
        cx-time (map #(x-scale (nth (% :cx) time)) the-bubbles)
        cy-time (map #(y-scale (nth (% :cy) time)) the-bubbles)
        r-time (map #(nth (% :radius) time) the-bubbles)]
      (doall (map #(-> (d3.select (str "#" %1))
                       (.transition)
                       (.duration 500)
                       (.ease "linear")
                       (.attr "cx" %2)
                       (.attr "cy" %3)
                       (.attr "r" %4)) bubbles-names cx-time cy-time r-time))
      (js/setTimeout #(val (select "#time_scroller") (inc time)) 500)
      (update-date)                   
      (or @animate? (>= (read-string (val (select "#time_scroller"))) (chart :t-max)))))

(defn set-time-dependence [bubble-name]
  (reset! animate? true)
  (let [time (val (select "#time_scroller"))
        bubble (bubbles bubble-name)
        bubble-selector (str "#" bubble-name)
        cx-time (x-scale (nth (bubble :cx) time))
        cy-time (y-scale (nth (bubble :cy) time))
        r-time (nth (bubble :radius) time)]
    (-> (d3.select bubble-selector)
        (.transition)
        (.duration 50)
        (.ease "linear")
        (.attr "cx" cx-time)
        (.attr "cy" cy-time)
        (.attr "r" r-time))))

(defn stop [] 
  (reset! animate? true))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;