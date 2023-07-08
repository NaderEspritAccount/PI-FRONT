import { Post } from './../../../model/post';
import { Component, Inject,OnInit  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PostService } from 'src/app/services/post.service';
import { DetailPostComponent } from '../details/detail-post.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.less']
})
export class AddpostComponent {
  myForm: FormGroup;
  imageUrl: string = '';
    files: File[] = [];


  constructor(private fb: FormBuilder,

    public matDialogRef: MatDialogRef<DetailPostComponent>, private postService: PostService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.myForm = this.fb.group({
      description: ['', Validators.required],
      title: ['', [Validators.required]],
      id_image: ['']
    });
  }
  onSubmit() {
    if (this.myForm.valid && this.files[0]) {
      const formData = new FormData();
      console.log(this.myForm.value.title);
      formData.append('description', this.myForm.value.description);
      formData.append('title', this.myForm.value.title);
      formData.append('id_image', this.files[0]);

      this.postService.addPost(formData).subscribe(
        response => {
          // Handle the response from the backend
          console.log(response);
          this.matDialogRef.close(); 
        },
        error => {
          // Handle any errors that occur during the HTTP request
          console.error(error);
        }
      );
    }
  }

  

	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
  

  onNoClick(): void {}
}