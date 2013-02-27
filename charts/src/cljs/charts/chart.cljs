(ns charts.chart
  (:require-macros [c2.util :refer [bind!]])
  (:require [charts.svg :refer [*chart-svg-id* *chart-svg-selector*]]
            [charts.axes :refer [draw-axes center-axes get-range *axes-id* 
                                 *axes-selector*]]
            [charts.grid :refer [draw-grid]]
            [charts.bubbles :refer [*bubbles-id*]]
            [charts.maths :refer [translate]]))

;;;; CHART specifications prototype ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; (def chart (atom {:id "chart"
;;                   :position {:x x
;;                              :y y}
;;                   :width w
;;                   :height h
;;                   :margin {:horizontal h'
;;                            :vertical v'}
;;                   :type *identificator*
;;                   :axes {:x-axis x-axis
;;                          :y-axis y-axis}
;;                   :visible-axis [:x-axis :y-axis]
;;                   :radius-variable r-axis
;;                   :t-span (range t-max)}))
;; 
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;; CHART axis selectors ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:dynamic *horizontal-axis-id* "horizontal-axis")
(def ^:dynamic *horizontal-axis-selector* "#horizontal-axis")

(def ^:dynamic *vertical-axis-id* "vertical-axis") 
(def ^:dynamic *vertical-axis-selector* "#vertical-axis") 

(def ^:dynamic *axes-selectors* [*horizontal-axis-selector* *vertical-axis-selector*])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;; CHART internal utils ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn update-chart 
  "Update the chart specifications"
  [chart chart-specs]
  (let [new-chart-specs (merge @chart chart-specs)]
    (reset! chart new-chart-specs)))
  
(defn chart-visibility 
  "Animation on chart drawning"
  [on-off]
  (let [opacity (case (name on-off) "on" 1 "off" 0)]
    (-> (d3.select *axes-selector*)
        (.transition)
        (.duration 300)
        (.attr "opacity" opacity))))

(defn set-new-axes
  "Rearrange the axis in order to be drawn in the chart.
   Here axes must be a vector of keywords"
  [chart axes]
  (swap! chart #(merge % {:visible-axis axes}))
  (let [[x-axis y-axis] (map #(into ((@chart :axes) %) []) axes)]
    (swap! x-axis #(merge % {:orient "bottom" 
                             :range (get-range :horizontal @chart)}))
    (swap! y-axis #(merge % {:orient "left"
                             :range (get-range :vertical @chart)}))))

(defn draw-background 
  "Backround of the chart"
  [chart style]
  (let [background (select-keys style [:fill :opacity])
        size (select-keys chart [:width :height])
        position (chart :position)]
    (bind! *chart-svg-selector*
           [:svg (merge {:id *chart-svg-id* :version 1.1})
            [:g {:id (chart :id)}
             [:rect (merge size position background)]]
            [:g {:id *axes-id* :opacity 1}
             [:g {:id *horizontal-axis-id* :opacity 0}]
             [:g {:id *vertical-axis-id* :opacity 0}]]
            [:g {:id *bubbles-id* :opacity 0}]])))

(defn draw-chart 
  "Draw the visible axes centered in the origin"
  [chart style]
  (draw-background chart style)
  (let [axes (chart :axes)
        visible (chart :visible-axis)
        visible-axes (map #(into ((chart :axes) %) []) visible)]
    (draw-axes visible-axes *axes-selectors* style)
    (center-axes visible-axes)
    (draw-grid chart visible-axes style)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;