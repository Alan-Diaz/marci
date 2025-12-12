import { Component } from '@angular/core';
import { BlogService } from '../../../services/blog/blog.service';
import { Blog } from '../../../models/blog.model';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-blog-detail',
  imports: [NgFor],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
    
  mainBlog:Blog = {
  id: 0,
  title: "test",
  text: "test",
  img: "assets/img/andromeda.jpeg",
  date: "",
  label_main: "",
  label_secondary: "",
  sub_texts: [{ title: "", text: "" }]
};
  
  constructor(private blogService:BlogService){   
  }

  ngOnInit(){
    this.blogService.getBlogById(0).subscribe(data => {
      this.mainBlog = data == undefined? this.mainBlog=this.mainBlog : this.mainBlog=data;  
    });
  }
}
