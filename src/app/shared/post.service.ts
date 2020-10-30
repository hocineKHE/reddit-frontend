import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from './PostModel';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }


  getAllPost() : Observable<Array<PostModel>>{
      return this.httpClient.get<Array<PostModel>>('http://127.0.0.1:8080/api/posts/');
  }
}
