(ns time-chart-demo.chart
  (:require [time-chart-demo.svg :refer [svg margin]]
            [time-chart-demo.axes :refer [x-axis y-axis x-axis->origin y-axis->origin 
                                          create-axis draw-axis x-scale y-scale]]
            [c2.svg :refer [translate]]))

;;;; CHART specifications and render ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:

(def chart {:width (- (svg :width) (margin :svg-right) (margin :svg-left))
            :height (- (svg :height) (margin :svg-top) (margin :svg-bottom))
            :axes {:x (create-axis x-axis x-scale)
                   :y (create-axis y-axis y-scale)}
            :axes-label {:x "x"
                         :y "y"}
            :t-max 16
            :background-fill "#002B36"
            :bubbles-stroke "#073642"
            :ticks-font "12px ubuntu"
            :axes-stroke "#93A1A1"})

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; CHART utility functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn draw-background [chart] 
  (-> (d3.select (svg :id))
      (.append "rect")
      (.attr "width" (chart :width))
      (.attr "height" (chart :height))
      (.attr "fill" (chart :background-fill))
      (.attr "opacity" 1)
      (.attr "transform" (translate [(margin :svg-left) (margin :svg-top)]))))

(defn draw-chart [chart]
  (let [x-axis ((chart :axes) :x)
        x-label ((chart :axes-label) :x)
        y-axis ((chart :axes) :y)
        y-label ((chart :axes-label) :y)]
    (draw-axis x-axis x-label x-axis->origin)
    (draw-axis y-axis y-label y-axis->origin))
  (-> (d3.selectAll ".axis path")
      (.style "fill" "none")
      (.style "stroke" (chart :axes-stroke))
      (.style "shape-rendering" "crispEdges"))
  (-> (d3.selectAll ".axis line")
      (.style "fill" "none")
      (.style "stroke" (chart :axes-stroke))
      (.style "shape-rendering" "crispEdges"))
  (-> (d3.selectAll "text")
      (.style "fill" (chart :axes-stroke))
      (.style "font" (chart :ticks-font))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;