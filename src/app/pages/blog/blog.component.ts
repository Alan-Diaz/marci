import { Component } from '@angular/core';
import { BlogService } from '../../services/blog/blog.service';
import { Blog } from '../../models/blog.model';
import { SlicePipe } from '@angular/common';
import { SeoService } from '../../services/seo/seo.service';

@Component({
  selector: 'app-blog',
  imports: [SlicePipe],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blogs: Blog[] =[];
  mainBlog: Blog = {
  id: 0,
  title: "",
  text: "",
  img: "",
  date: "",
  label_main: "",
  label_secondary: "",
  sub_texts: [{ title: "", text: "" }]
};
  constructor(private blogService:BlogService, private seo: SeoService){
    
  }
  ngOnInit(){
    this.blogService.getBlogs().subscribe(data => {
      this.blogs = data;
    this.mainBlog = this.blogs[0];
    this.seo.setCanonical(
      'https://www.tusitio.com/blog/'
    );
    });
      
  }
}
