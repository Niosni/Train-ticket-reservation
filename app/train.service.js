System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TrainService;
    return {
        setters:[],
        execute: function() {
            TrainService = (function () {
                function TrainService() {
                }
                TrainService.prototype.getTrains = function () {
                    return ["Train1", "Train2", "Train3"];
                };
                return TrainService;
            }());
            exports_1("TrainService", TrainService);
        }
    }
});
//# sourceMappingURL=train.service.js.map