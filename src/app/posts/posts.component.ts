import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private dictionaryService: DictionaryService, private activeRoute: ActivatedRoute, private route : Router ) { }
   //user id (taken from query)
  id: number = this.activeRoute.snapshot.queryParams['id'];

  posts: any = [];
  //use loading status for loading spinner 
  loading: boolean = true;

  ngOnInit(): void {

   this.getPosts();

  }
  //Get user posts 
  getPosts(){
    this.dictionaryService.GetPosts(this.id).subscribe(
      (data)=>{

        this.posts = data;

        this.loading = false;
      }
    )
  }
   //navigate to the previous page
  back(){
    this.route.navigate(['user-details'], { queryParams: { id: this.id } })
  }

}
