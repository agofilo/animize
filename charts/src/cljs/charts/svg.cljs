(ns charts.svg)

;;;; Global CSS selectora and name for the chart ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:dynamic *chart-svg-selector* "#chart-svg")
(def ^:dynamic *chart-svg-id* "chart-svg")

(defn init-svg []
  (-> (d3.select "body")
      (.append "div")
      (.insert "svg" ":first-child")
      (.attr "id" *chart-svg-id*)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
