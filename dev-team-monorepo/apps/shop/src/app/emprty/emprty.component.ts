import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shop-empty',
  templateUrl: './emprty.component.html',
  styleUrls: ['./emprty.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmptyComponent {}
