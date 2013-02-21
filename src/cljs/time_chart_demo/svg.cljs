(ns time-chart-demo.svg)

;;;; SVG specifications ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def svg {:id "#bubble_chart"
          :width 1000 
          :height 530})

(def margin {:svg-top 19.5
             :svg-bottom 0
             :svg-left 19.5
             :svg-right 19.5
             :chart-top 39.5
             :chart-bottom 79.5
             :chart-left 39.5
             :chart-right 39.5})

(defn draw-svg [svg-specs]
 (-> (d3.select (svg-specs :id))
     (.attr "width" (svg-specs :width))
     (.attr "height" (svg-specs :height))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;