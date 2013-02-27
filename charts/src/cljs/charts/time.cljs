(ns charts.time
  (:require [charts.svg :refer [*chart-svg-selector*]]))

;;;; TIME scroller ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; It works only with webkit

(def ^:dynamic *time-scroller-id* "time_scroller")
(def ^:dynamic *time-scroller-selector* "#time_scroller")

(def stop-time? (atom false))

(defn attach-time-scroller
  "Attach a time scrollbar and a play/stop button on the chart"
  [chart]
  (-> (d3.select *chart-svg-selector*)
      (.append "div")
      (.attr "id" *time-scroller-id*)))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


;;;; TIME SCROLLER events ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;