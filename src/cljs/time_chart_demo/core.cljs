(ns time-chart-demo.core
  (:require-macros [c2.util :refer [bind!]])
  (:require [cljs.reader :refer [read-string]]
            [time-chart-demo.svg :refer [svg draw-svg]]
            [time-chart-demo.chart :refer [chart draw-background draw-chart]]
            [time-chart-demo.date :refer [add-date update-date]]
            [time-chart-demo.bubbles :refer [draw-bubbles explode implode select-main-ball 
                                             select-sub-balls deselect-main-ball sort-bubbles
                                             bubbles-names deselect-sub-balls create-bubbles]]
            [time-chart-demo.scrolling :refer [scroller add-scroller set-time-dependence 
                                               play stop set-nth-time-dependence animate?]]
            [shoreleave.remotes.http-rpc :refer [remote-callback]]
            [domina.events :refer [dispatch! listen!]]
            [domina :refer [by-id value set-value!]]
            [c2.dom :refer [val attr select]]
            [c2.event :refer [on]]))

;;;; DRAWING ... ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(create-bubbles)

(draw-svg svg)

(draw-background chart)

(add-date)

(-> (d3.select "#bubble_chart")
    (.append "g")
    (.attr "id" "bubbles")
    (.attr "opening-order" []))

(remote-callback :create-bubbles-remote [] (fn [bub] 
                                             (draw-bubbles bub)
                                             (sort-bubbles)
                                             ))

;(js/setTimeout #(sort-bubbles) 500) 

(draw-chart chart)

(add-scroller scroller)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; EVENTS handling ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(on "#time_scroller" :change #((update-date)
                               (doseq [bubble bubbles-names] 
                                 (set-time-dependence bubble))))

(on "#time_scroller" :mousedown #(when (= (str (chart :t-max)) (val (select "#time_scroller"))) 
                                   (doall (-> (d3.select "#play-stop")
                                              (.attr "behavior" "play")
                                              (.text "Play")))))
    
(on "#play-stop" :click (fn [] 
                     (let [type (attr (select "#play-stop") :behavior)]
                       (case type
                         "play" (do
                                  (reset! animate? false)
                                  (d3.timer play)
                                  (-> (d3.select "#play-stop")
                                      (.attr "behavior" "stop")
                                      (.text "Stop")))
                         "stop" (do
                                  (stop)
                                  (-> (d3.select "#play-stop")
                                      (.attr "behavior" "play")
                                      (.text "Play")))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
