import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/PostModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts$ : Array<PostModel> = [];


  constructor(private postService: PostService) {
    this.postService.getAllPost().subscribe(post=>{
      this.posts$ =post;

      console.log(post.length+"    cccccc");

    })
   }

  ngOnInit(): void {
  }

}
