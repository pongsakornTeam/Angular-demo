import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private baseUrl = "http://localhost:8080/api/v2/blog";
  constructor(private httpClient:HttpClient) { }

  getBlogList() : Observable<Blog[]>{
    return this.httpClient.get<Blog[]>(this.baseUrl);
  }

  createBlogList(blog: Blog) :Observable<Object>{
    return this.httpClient.post<Blog[]>(this.baseUrl,blog);
  }

  deleteBlog(id: number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
