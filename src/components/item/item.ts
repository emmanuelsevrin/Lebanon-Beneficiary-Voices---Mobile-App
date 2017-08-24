import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {

  @Input() name: string;
  @Input() image: string;
  @Input() price: string;
  direction: string;
  
  constructor(private translate: TranslateService) {
  	this.translate.currentLang === 'ar' ? this.direction = 'rtl' : this.direction = 'ltr';
  }

}
