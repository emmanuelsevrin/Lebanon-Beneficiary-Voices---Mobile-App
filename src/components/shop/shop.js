var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
var ShopComponent = (function () {
    function ShopComponent(translate) {
        this.translate = translate;
        this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
    }
    return ShopComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], ShopComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ShopComponent.prototype, "distance", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ShopComponent.prototype, "image", void 0);
ShopComponent = __decorate([
    Component({
        selector: 'shop',
        templateUrl: 'shop.html'
    }),
    __metadata("design:paramtypes", [TranslateService])
], ShopComponent);
export { ShopComponent };
//# sourceMappingURL=shop.js.map