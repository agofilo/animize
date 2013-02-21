(ns time-chart-demo.axes
    (:require [c2.util :refer [clj->js]]
              [c2.svg :refer [translate]]
              [time-chart-demo.svg :refer [margin svg]]))

;;;; AXES specifications ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def x-axis {:scale "linear"
             :domain [0 100]
             :range [(+ (margin :svg-left) (margin :chart-left)) 
                     (- (svg :width) (margin :svg-right) (margin :chart-right))]
             :orient "bottom"
             :ticks 10})

(def y-axis {:scale "linear"
             :domain [0 100]
             :range [(- (svg :height) (margin :svg-bottom) (margin :chart-bottom)) 
                     (+ (margin :svg-top) (margin :chart-top))]
             :orient "left"
             :ticks 10})

(def x-axis->origin [0 (first (y-axis :range))])

(def y-axis->origin [(first (x-axis :range)) 0])

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; AXIS utility functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn scale [axis-specs]
  (let [scale->d3 {"linear" (d3.scale.linear)
                   "log" (d3.scale.log)}]
    (-> (scale->d3 (axis-specs :scale))
        (.domain (clj->js (axis-specs :domain)))
        (.range (clj->js (axis-specs :range))))))

(def x-scale (scale x-axis))

(def y-scale (scale y-axis))

(defn create-axis [axis-specs d3-scale]
  (-> (d3.svg.axis)
      (.scale d3-scale)
      (.orient (axis-specs :orient))
      (.ticks (axis-specs :ticks) (d3.format ",d"))))

(defn draw-axis [axis label axis->origin]
  (-> (d3.select (svg :id))
      (.append "g")
      (.attr "class" (str label " axis"))
      (.attr "transform" (translate axis->origin))
      (.call axis)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
