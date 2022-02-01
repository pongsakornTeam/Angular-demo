import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  blog: Blog = new Blog();
  constructor(private blogService : BlogService, private router: Router) { }

  saveBlog(){
    this.blogService.createBlogList(this.blog).subscribe(data => {
      console.log(data);
      this.goToBlogList();
    },
    error => console.log(error));
  }

  goToBlogList(){
    this.router.navigate(['/blog-list']);
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.blog);
    this.saveBlog();
  }

}
