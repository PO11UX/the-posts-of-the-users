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
  tabIndex: number = 0;
  id: number = this.activeRoute.snapshot.queryParams['id']
  loading: boolean = true
  userDetails: any = []
  ngOnInit(): void {
      
      this.getUserDetails()
    
  }
  
  getUserDetails(){
    this.dictionaryService.GetUserDetails(this.id).subscribe(
      (data)=>{
        this.userDetails = data;
        this.loading = false;
      }
    )
  }
  GetPost(id: number){
    this.route.navigate(['posts'], { queryParams: { id: id } })
  }
  back(){
    this.route.navigate(['users'])
  }
}
