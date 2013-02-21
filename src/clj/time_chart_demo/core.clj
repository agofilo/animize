(ns time-chart-demo.core
  (:use compojure.core)
  (:require [compojure.handler :as cmpjhandler]
            [compojure.route :as cmpjroute]
            [cemerick.shoreleave.rpc :as rpc]))

(defroutes app-routes
  (GET "/" [] "<p>Server connection established</p>")
  (cmpjroute/resources "/")
  (cmpjroute/not-found "Page non found"))

(def handler
  (cmpjhandler/site app-routes))

(def middleware (-> (var handler)
                    (rpc/wrap-rpc)
                    (cmpjhandler/site)))