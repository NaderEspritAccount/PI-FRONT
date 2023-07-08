import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';
import { DetailPostComponent } from './details/detail-post.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less'],
})
export class PostComponent implements OnInit {
  posts: any[] = [];
  dialogRef: any;
  constructor(
    private sanitizer: DomSanitizer,
    private postservice: PostService,
    private _matDialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.postservice.getpostes().subscribe(
      (done: any[]) => {
        for (let element of done) {
          this.postservice
            .downloadMediaFromUser(element.id_image)
            .subscribe((res) => {
              const objectURL = URL.createObjectURL(res);
              element.id_image =
                this.sanitizer.bypassSecurityTrustUrl(objectURL);
              this.posts.push(element);
              console.log(element);
            });
        }
      },
      (error: any) => {
        // Handle error here
      }
    );
  }

  openDetail(post: any) {
    this.dialogRef = this._matDialog.open(DetailPostComponent, {
      data: post,
    });
    this.dialogRef.afterClosed().subscribe((result) => {
      this.postservice.getpostes().subscribe(
        (done: any[]) => {
          for (let element of done) {
            this.postservice
              .downloadMediaFromUser(element.id_image)
              .subscribe((res) => {
                const objectURL = URL.createObjectURL(res);
                element.id_image =
                  this.sanitizer.bypassSecurityTrustUrl(objectURL);
                this.posts.push(element);
                console.log(element);
              });
          }
        },
        (error: any) => {
          // Handle error here
        }
      );
    });
  }
}
