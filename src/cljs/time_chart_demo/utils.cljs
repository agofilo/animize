(ns time-chart-demo.utils
  (:require-macros [c2.util :as m-util])
  (:require [c2.util :as util]))

(defn d3map [selector f]
  (let [els (aget selector 0)
        length (count els)] 
    (doall (map #(f (d3.select (aget els %))) (range length)))))
