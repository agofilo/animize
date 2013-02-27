(ns charts-tests.chart-interface-test
  (:require [charts-tests.axes-interface-test :refer [x-axis y-axis t-axis]]))

(def test-chart (atom {:id "chart"
                       :position {:x 20
                                  :y 20}
                       :axes-margin {:horizontal 50
                                     :vertical 30}
                       :width 800
                       :height 300 
                       :type nil
                       :axes (sorted-map :x-axis x-axis 
                                         :y-axis y-axis 
                                         :t-axis t-axis)
                       :visible-axis [:x-axis :y-axis]
                       :radius-variable 'r-axis}))