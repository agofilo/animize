(ns charts-tests.axes-interface-test
  (:require [charts.maths :refer [-inf]]))

(def x-axis (atom {:label "x"
                   :scale "linear"
                   :range nil
                   :domain [0 200]
                   :origin 0
                   :orient "bottom"
                   :threshold -inf
                   :ticks 10
                   :ticks-num nil
                   :format (d3.format ",d")}))

(def y-axis (atom {:label "y"
                   :scale "linear"
                   :range nil
                   :domain [0 100]
                   :origin 0
                   :orient "left"
                   :threshold -inf
                   :ticks 10
                   :ticks-num nil
                   :format (d3.format ",d")}))

(def t-axis (atom {:label "t"
                   :scale "time"
                   :range nil
                   :domain [(js/Date. "January 1, 2013") (js/Date. "January 10, 2013")]
                   :origin (js/Date. "january 1, 2013")
                   :orient "bottom"
                   :threshold -inf
                   :ticks d3.time.days
                   :ticks-num 3
                   :format (d3.time.format "%a, %d/%m")}))

;;; axes' ranges depenend on the chart, must be updated. 