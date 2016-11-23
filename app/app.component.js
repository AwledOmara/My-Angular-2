"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'xDays';
        this.input = '';
        this.res = 0;
    }
    AppComponent.prototype.cal = function () {
        try {
            this.res = eval(this.input);
        }
        catch (ex) {
            try {
                this.res = 0;
            }
            catch (ex2) {
            }
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h3>Hello {{title}}</h3>\n            <input [(ngModel)]=\"input\" (ngModelChange)='cal()' placeholer='6+6'><br>\n            <label><span style='color:green;' >Result:</span>{{res}}</label> <br>\n            <button (click)='cal()' >OK</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map