(ns time-chart-demo.templates
  (:require [net.cgrand.enlive-html :as enlive]
            [hiccup.core :as hiccup]))

(defn template-render
  [template arg] (apply str (template arg)))