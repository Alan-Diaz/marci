import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blog } from '../../models/blog.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private opSubjec = new BehaviorSubject<Blog[]>([]);
  opSub$ = this.opSubjec.asObservable();
  private blogs : Blog[] = [];
  private assetsUrl: string = "assets/products/blogs.json"

    constructor(private http: HttpClient) {
    this.opSub$ = this.http.get<Blog[]>(this.assetsUrl);
    this.opSub$.subscribe(data =>{
      this.blogs = data;
    });
  }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.assetsUrl);
  }

  getBlogById(id: number): Observable<Blog | undefined> {
    return this.http.get<Blog[]>(this.assetsUrl).pipe(
        map(blogs => blogs.find(b => b.id === id))
  );
  }
}
