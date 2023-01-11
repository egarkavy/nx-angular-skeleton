import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ListItemComponent],
  exports: [
    ListItemComponent
  ]
})
export class ShopCatalogUiModule {}
