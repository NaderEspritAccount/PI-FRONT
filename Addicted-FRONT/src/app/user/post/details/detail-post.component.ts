import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.less'],
})
export class DetailPostComponent {
  comment: any = '';
  likeEnable: boolean = false;
  dislikeEnable: boolean = false;
  constructor(
    private _postService: PostService,
    public matDialogRef: MatDialogRef<DetailPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  addItem() {
    let comment = {
      id_post: this.data._id,
      description: this.comment,
    };
    this._postService.addComment(comment).subscribe((res: any[]) => {
      this.data.comments = res;
      this.comment = '';
    });
  }
  like() {
    let data = {
      enablelike: 'true',
      enabdislike: 'false',
    };
    this._postService
      .likeDislikePost(data, this.data._id)
      .subscribe((res: any) => {
        console.log(res);
        this.data.nbrlike = res.nbrlike;
        this.data.nbrdlike = res.nbrdlike;
        this.likeEnable = true;
      });
  }
  dislike() {
    let data = {
      enablelike: 'false',
      enabdislike: 'true',
    };
    this._postService
      .likeDislikePost(data, this.data._id)
      .subscribe((res: any) => {
        console.log(res);
        this.data.nbrlike = res.nbrlike;
        this.data.nbrdlike = res.nbrdlike;
        this.dislikeEnable = true;
      });
  }
}
