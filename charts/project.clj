(defproject charts "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.0.0"
  :source-paths ["src/clj" "src/crossovers" "resources"]

  :dependencies [[org.clojure/clojure "1.4.0"]
                 [compojure "1.1.5"]
                 [domina "1.0.0"]
                 [hiccup "1.0.2"]
                 [hiccups "0.2.0"]
                 [com.cemerick/shoreleave-remote-ring "0.0.2"]
                 [shoreleave/shoreleave-remote "0.2.2"]
                 [com.cemerick/valip "0.3.2"]
                 [com.cemerick/friend "0.1.3"]
                 [enlive "1.0.1"]
                 [enfocus "1.0.0-beta2"]
                 [korma "0.3.0-RC2"]
                 [com.h2database/h2 "1.3.164"]
                 [com.keminglabs/c2 "0.2.1"]
                 [tailrecursion/javelin "1.0.0-SNAPSHOT"]]	

  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-ring "0.8.2"]]

  :ring {:handler charts.core/middleware}
  
  :cljsbuild {:crossover [charts.crossovers]
              :builds {:dev {:source-paths ["src/cljs" "test/cljs"]
                             :compiler {:output-to "resources/public/js/charts_dev.js"
                                        :optimizations :whitespace
                                        :externs ["externs/d3_externs.js"]
                                        :pretty-print true }}
                       :pre-prod {:source-paths ["src/cljs" "test/cljs"]
                                  :compiler {:output-to "resources/public/js/charts_pre.js"
                                             :externs ["externs/d3_externs.js"]
                                             :optimizations :simple
                                             :pretty-print true }}
                       :prod {:source-paths ["src/cljs"]
                              :compiler {:output-to "resources/public/js/charts.js"
                                         :externs ["externs/d3_externs.js"]
                                         :optimizations :advanced 
                                         :pretty-print false}}}})
