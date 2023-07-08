import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { DetailPostComponent } from './details/detail-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: any[];
  constructor(
    private postservice: PostService,
    private _matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.postservice.getpostes().subscribe(
      (done: any[]) => {
        this.posts = done;
      },
      (error: any) => {
        // Handle error here
      }
    );
  }

  openDetail(post: any) {
    const dialogRef = this._matDialog.open(DetailPostComponent, {
      data: post,
  });
  }
}
