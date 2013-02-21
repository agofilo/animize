(ns time-chart-demo.database
  (require [clojure.java.io :as io]
           [clojure-csv.core :as csv]))

(defn add-key
  [arg-map keys-arg]
  (swap! arg-map 
         #(merge % {(keyword keys-arg) nil})))

(defn set-keys 
  [arg-map keys-arg]
  (map #(add-key arg-map %) keys-arg))

(defn extract-data-csv
  [key-arg db]
  (if (= (name key-arg) "color") 
    (vec (map #(nth % (.indexOf (first db) (name key-arg))) (rest db)))
    (vec (map #(read-string (nth % (.indexOf (first db) (name key-arg)))) (rest db)))))

(defn fill-key-csv
  [arg-map key-arg db]
  (swap! arg-map 
         #(merge % {(keyword key-arg)
                    (extract-data-csv key-arg db)})))

(defn build-bubble
  [arg-map folder bubblename]
  (let [db (csv/parse-csv (slurp (str folder "/" bubblename ".csv")) :delimiter \;)]
    (add-key arg-map "parent-bubble")
    (add-key arg-map "sub-bubbles")
   (map #(fill-key-csv arg-map % db) (first db))))
