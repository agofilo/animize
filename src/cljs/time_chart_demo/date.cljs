(ns time-chart-demo.date
  (:require [cljs.reader :refer [read-string]]
            [c2.dom :refer [val select]]))

(def dates (range 1991 2008))

(defn add-date []
  (-> (d3.select "body")
      (.insert "div" ":first-child")
      (.attr "id" "dates")
      (.style "position" "absolute")
      (.style "left" "150px")
      (.style "top" "100px")
      (.style "color" "#93A1A1")
      (.style "font-family" "ubuntu")
      (.style "font-size" "72px")
      (.text "1991")))

(defn update-date []
  (let [scroller-position (val (select "#time_scroller"))
        date (nth dates (read-string scroller-position))]
  (-> (d3.select "#dates")
      (.text (str date)))))
