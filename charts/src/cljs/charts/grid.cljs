(ns charts.grid
  (:require [charts.axes :refer [get-scale]]))

;;;; GRID functions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def grid {"on" 0.5, "off" 0})

(defn set-grid-style 
  "Set grid style"
  [style]
  (-> (d3.selectAll "path.grid")
      (.style "fill" (style :axes-stroke))
      (.style "opacity" (grid "on"))
      (.style "stroke" "none")))

(defn grid-line 
  "Return the exact path for the grid lines"
  [l orient p]
  (case (name orient)
    "vertical" (let [m (- p 0.5) 
                     v (+ l p)]
                 (str "M-0.5," m ",L-0.5," v ",L0.5," v ",L0.5," m))
;;    (str "M-0.5,0.5,L-0.5," l ",L0.5," l ",L0.5,-0.5")
    
    "horizontal" (let [m (- (+ 0.5 p)) 
                       h (- l p)]
                   (str "M" m ",-0.5,L" h ",-0.5,L" h ",0.5,L" m ",0.5"))
;;    (str "M-0.5,-0.5,L" l ",-0.5,L" l ",0.5,L-0.5,0.5")

))

(defn draw-grid 
  "Draw the grid"
  [chart axes style]
   (let [[x-scale y-scale] (map #(get-scale @%) axes)
         [x-axis-selector y-axis-selector] (map #(str "#" (@% :label)) axes)      
         [o-x o-y] (map #(%2 %1) (map #(@% :origin) axes) [x-scale y-scale])        
         x-axis-length (- (chart :width) (* 2 ((chart :axes-margin) :horizontal)))
         y-axis-length (- (* 2 ((chart :axes-margin) :vertical)) (chart :height))
         x-trans (- o-x (+ ((chart :position) :x) ((chart :axes-margin) :horizontal)))
         v-trans (- (+ (chart :height) ((chart :position) :y)) o-y ((chart :axes-margin) :vertical))
         vertical-line (grid-line y-axis-length :vertical v-trans)
         horizontal-line (grid-line x-axis-length :horizontal x-trans)]  
     (-> (d3.selectAll (str x-axis-selector " .tick.major"))
         (.insert "path" ":first-child")
         (.attr "class" "grid")
         (.attr "d" vertical-line))
     (-> (d3.selectAll (str y-axis-selector " .tick.major"))     
         (.insert "path" ":first-child")
         (.attr "class" "grid")
         (.attr "d" horizontal-line)))
   (set-grid-style style))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;; GRID events ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn grid-visibility 
  "Hide or show the grid with respect to an axis, that is that the othogonal
   lines to the given axis. If both axes are given, the whole grid
   is manipulate. on-off argument should be a keyword or a string
   :on or :off"
  ([axes on-off] 
     (doseq [axis axes]
       (let [axis-selector (str "#" (@axis :label))
             grid-selector (str axis-selector " line.grid")
             opacity (grid (name on-off))]
         (-> (d3.selectAll grid-selector)
             (.style "stroke-opacity" opacity))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;