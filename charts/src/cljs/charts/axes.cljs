(ns charts.axes
  (:require-macros [c2.util :refer [bind!]])
  (:require [charts.maths :refer [-inf inf translate]]
            [c2.util :refer [clj->js]]))

;;;; AXIS specifications prototype ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; (def axis (atom {:label "x"
;;                  :scale "linear"
;;                  :range [0 100]
;;                  :domain [19.5 819.5]
;;                  :orient "bottom"
;;                  :threshold -inf
;;                  :ticks 10}))
;;
;; :label and :range must be generated serves side, an essential map
;;
;;    {:label "x" 
;;     :range [a b]}
;;
;; will be defined by rpc procedures and updated by update-ax*s
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; CHART global idenfiticators ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:dynamic *axes-id* "chart-and-grid")
(def ^:dynamic *axes-selector* "#chart-and-grid")

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;; AXIS utility functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn update-axis 
  "Merge some new specifications to the axis, mostly 
   for chart-dependent parameters"
  [axis axis-specs]
  (let [new-axis-specs (merge @axis axis-specs)]
    (reset! axis new-axis-specs)))

(defn update-axes 
  "Update more axis"
  [axes axes-specs]
  (doall (map update-axis axes axes-specs)))

(defn scale-parsing
  "Parse the :label key to the d3 scaling functions"
  [scale]
  (case scale 
    "linear" (d3.scale.linear)
    "log" (d3.scale.log)
    "sqrt" (d3.scale.sqrt)
    "pow" (d3.scale.pow)
    "time" (d3.time.scale)))

(defn get-scale 
  "Get the scale of an axis from the axis specifications map"
  [axis]
  (-> (scale-parsing (axis :scale))
      (.domain (clj->js (axis :domain)))
      (.rangeRound (clj->js (axis :range)))))

(defn get-range 
  "Get the axis domain from the style options. Nasty."
  [orientation chart]
  (let [x0 (+ ((chart :position) :x) ((chart :axes-margin) :horizontal))
        x1 (- (+ ((chart :position) :x) (chart :width)) ((chart :axes-margin) :horizontal))
        y0 (- (+ ((chart :position) :y) (chart :height)) ((chart :axes-margin) :vertical))
        y1 (+ ((chart :position) :y) ((chart :axes-margin) :vertical))
        domains {"horizontal" [x0 x1]
                 "vertical" [y0 y1]}]
    (domains (name orientation))))

(defn create-axis 
  "Create a d3-axis svg object"
  [axis]
  (-> (d3.svg.axis)
      (.scale (get-scale axis))
      (.orient (axis :orient))
      (.ticks (axis :ticks) (axis :ticks-num))
      (.tickFormat (axis :format))))

(defn create-axes
  "Create more axes"
  [axes]
  (map create-axis axes))

(defn set-axes-style 
  "Set style of all axes"
  [style]
  (let [color (style :axes-stroke)]
    (-> (d3.selectAll ".axis path")
        (.style "fill" "none")
        (.style "stroke" color)
        (.style "shape-rendering" "crispEdges"))
    (-> (d3.selectAll ".axis line")
        (.style "fill" "none")
        (.style "stroke" color)
        (.style "shape-rendering" "crispEdges"))
    (-> (d3.selectAll "text")
        (.style "fill" color)
        (.style "font" (style :font)))))

(defn draw-axis 
  "Append the axis to the DOM"
  ([axis parent-selector] 
     (bind! parent-selector [:g {:id (apply str (rest parent-selector))
                                 :opacity 0}])
     (-> (d3.select parent-selector)
         (.append "g")
         (.attr "id" (axis :label))
         (.attr "class" "axis")
         (.call (create-axis axis)))
     (-> (d3.select parent-selector)
         (.transition)
         (.duration 500)
         (.attr "opacity" 1)))
  ([axis parent-selector style] 
     (draw-axis axis parent-selector)
     (set-axes-style style)))

(defn draw-axes 
  [axes parent-selectors style]
  "Draw more axis (generally just two)"
  ;; (doseq [axis axes] 
  ;;   (draw-axis @axis))
  ;; (set-axes-style style)
  (doall (map #(draw-axis @%1 %2) axes parent-selectors))
  (set-axes-style style))

(defn center-axes 
  "Center the axis in the origin. axes must be a map"
  [axes]
  (let [[h-axis v-axis] (doall (map #(deref %) axes))
        [h-scale v-scale] (doall (map #(get-scale %) [h-axis v-axis])) 
        h-origin (h-scale (h-axis :origin))
        v-origin (v-scale (v-axis :origin))
        h-selector (str "#" (h-axis :label))
        v-selector (str "#" (v-axis :label))]
    (-> (d3.select h-selector)
        (.attr "transform" (translate [0 v-origin])))
    (-> (d3.select v-selector)
        (.attr "transform" (translate [h-origin 0])))))
        
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;