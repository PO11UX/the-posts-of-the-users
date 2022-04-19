import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(public dictionaryService: DictionaryService, private activeRoute: ActivatedRoute, private route : Router) { }
  //use tabIndex to stitch nav-items (Basic Info, Address, Company)
  tabIndex: number = 0;
  //user id (taken from query)
  id: number = this.activeRoute.snapshot.queryParams['id'];
  //use loading status for loading spinner 
  loading: boolean = true;

  userDetails: any = [];

  ngOnInit(): void {

    this.getUserDetails();

  }
  //get specific user data
  getUserDetails(){
    this.dictionaryService.GetUserDetails(this.id).subscribe(
      (data)=>{
        this.userDetails = data;

        this.loading = false;
      }
    )
  }

  //navigate to the user's posts page 
  GotoPosts(id: number){
    this.route.navigate(['posts'], { queryParams: { id: id } })
  }
  //navigate to the previous page
  back(){
    this.route.navigate(['users'])
  }
}
