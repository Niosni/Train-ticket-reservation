System.register(['angular2/core', './train.service', './auto-grow.directive'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, train_service_1, auto_grow_directive_1;
    var TrainsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            },
            function (auto_grow_directive_1_1) {
                auto_grow_directive_1 = auto_grow_directive_1_1;
            }],
        execute: function() {
            TrainsComponent = (function () {
                function TrainsComponent(trainService) {
                    this.title = "I like trains :-)";
                    this.trains = trainService.getTrains();
                }
                TrainsComponent = __decorate([
                    core_1.Component({
                        selector: 'trains',
                        template: "\n        <h2>Trains</h2>\n        {{ title }}\n        <input type=\"text\" autoGrow />\n        <ul>\n            <li *ngFor=\"#train of trains\">\n            {{ train }}\n            </li>\n        </ul>\n        ",
                        providers: [train_service_1.TrainService],
                        directives: [auto_grow_directive_1.AutoGrowDirective]
                    }), 
                    __metadata('design:paramtypes', [train_service_1.TrainService])
                ], TrainsComponent);
                return TrainsComponent;
            }());
            exports_1("TrainsComponent", TrainsComponent);
        }
    }
});
//# sourceMappingURL=trains.component.js.map