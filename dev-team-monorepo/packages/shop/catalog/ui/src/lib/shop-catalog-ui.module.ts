import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from './components/list-item/list-item.component';
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'

@NgModule({
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatCardModule],
  declarations: [ListItemComponent],
  exports: [
    ListItemComponent
  ]
})
export class ShopCatalogUiModule {}
