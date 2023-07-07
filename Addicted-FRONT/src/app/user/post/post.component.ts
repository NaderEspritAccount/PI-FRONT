import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit{
  post: Post[] = [];
  constructor(private postservice : PostService){}
  ngOnInit(): void {
    this.postservice.getpostes()
    .subscribe(
      (done: any[]) => {
        this.post = done;
        
      },
      (error: any) => {
        // Handle error here
      }
    );
    console.log(this.post);
    
  }
  

}
