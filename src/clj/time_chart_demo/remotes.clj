(ns time-chart-demo.remotes
  (:require [cemerick.shoreleave.rpc :refer [defremote remotes]]
            [time-chart-demo.database :refer [build-bubble]]))

;;;; BUBBLES builder via remote call ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defremote create-bubbles-remote []
  (let [folder "resources/private/database"
        b-names ["b3" "b4" "b5" "b6" "b7" "b8" "b9" "b10"]]
    (doall (zipmap b-names
                   (vec (map #(last (build-bubble (atom {}) folder %)) b-names))))))

(defremote foo []
  "Shoreleave sucks!") 


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;