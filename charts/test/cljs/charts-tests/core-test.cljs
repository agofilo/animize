(ns charts-tests.core-test
  (:require [charts-tests.axes-interface-test :refer [x-axis y-axis t-axis]]
            [charts-tests.chart-interface-test :refer [test-chart]]
            [charts-tests.style-interface-test :refer [test-style]]
            [charts.svg :refer [init-svg]]
            [charts.axes :as axes]
            [charts.chart :as chart]
            [charts.grid :as grid]
            [charts.time :as time]))

(chart/set-new-axes test-chart [:x-axis :y-axis])

;;;; TEST definitions ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(.log js/console "start testing...")
(init-svg)

(.log js/console "drawing background...")
;(chart/draw-background @test-chart @test-style)

(.log js/console "drawing styled axes...")
;(axes/draw-axis @x-axis @test-style)
;(axes/draw-axis @y-axis @test-style)

(.log js/console "drawing styled axes simultaneously...")
;(axes/draw-axes [x-axis y-axis] @test-style)

(.log js/console "centering axes...")
;(axes/center-axes [x-axis y-axis])

(.log js/console "drawing chart")
(chart/draw-chart @test-chart @test-style)

(.log js/console "Removing grid...")
;; (grid/grid-visibility [((@test-chart :axes) :x-axis)] :off)
;; (grid/grid-visibility [((@test-chart :axes) :y-axis)] :off)

(.log js/console "Drawing grid...")
;; (grid/grid-visibility [((@test-chart :axes) :x-axis)] :on)
;; (grid/grid-visibility [((@test-chart :axes) :y-axis)] :on)
;; (grid/grid-visibility (vals (@test-chart :axes)) :off)

 (js/setTimeout
  (fn [] 
    (chart/set-new-axes test-chart [:t-axis :y-axis])
    (.log js/console "Changing axes...")
    (chart/draw-chart @test-chart @test-style))
4000)

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;