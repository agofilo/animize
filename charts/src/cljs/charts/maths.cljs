(ns charts.maths
  (:require [c2.svg :as svg]))

;;;; MATHEMATICAL utilities ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def inf js/Infinity)
(def -inf (- js/Infinity))

(defn translate [point]
  "A little bit of generality..."
  (svg/translate (vec point)))

(defn linspace [[m n]]
  (range m (inc n)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;