(ns charts.remotes
  (:require [cemerick.shoreleave.rpc :as rpc]))

(rpc/defremote ^{:remote-name ::foo} foo []
  "I don't a whole lot")
                                                
