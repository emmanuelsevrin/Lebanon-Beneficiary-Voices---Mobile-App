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
var ItemComponent = (function () {
    function ItemComponent(translate) {
        this.translate = translate;
        this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
    }
    return ItemComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], ItemComponent.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ItemComponent.prototype, "image", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ItemComponent.prototype, "price", void 0);
ItemComponent = __decorate([
    Component({
        selector: 'item',
        templateUrl: 'item.html'
    }),
    __metadata("design:paramtypes", [TranslateService])
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.js.map