(ns time-chart-demo.snippets
  (:require [net.cgrand.enlive-html :as enlive]
            [hiccup.core :as hiccup]))

(defn snip-render
  [snippet arg] (apply str (enlive/emit* (snippet arg))))