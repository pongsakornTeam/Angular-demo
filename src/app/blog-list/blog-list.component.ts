import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs : Blog[];
  constructor(
    private blogService : BlogService, 
    private router : Router) { }

  ngOnInit(): void {
    this.getBlog();
  }

  private getBlog(){
    this.blogService.getBlogList().subscribe(data =>{
      this.blogs = data;
    })
  }

  deleteBlog(id : number){
    this.blogService.deleteBlog(id).subscribe(data =>{
      console.log(data);
      this.getBlog();
    })
  }
}
