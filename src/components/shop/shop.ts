import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'shop',
  templateUrl: 'shop.html'
})
export class ShopComponent {

	@Input() name: string;
  @Input() distance: string;
  @Input() image: string;
  direction: string;

  constructor(private translate: TranslateService) {
  	this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
  }
}
