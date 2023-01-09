import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { shopCartFeatureShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(shopCartFeatureShellRoutes)],
})
export class ShopCartFeatureShellModule {}
