import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.less'],
})
export class DetailPostComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    console.log(data);
  }
  onNoClick(): void {}
}
