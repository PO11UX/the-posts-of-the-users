import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  constructor(private dictionaryService: DictionaryService,private route: Router) { }

  users: any = [];
  
  ngOnInit(): void {
     this.getUsers()
  }
  //Get user names 
  getUsers(){
    this.dictionaryService.GetUsers().subscribe(
      (data)=>{
        this.users = data;
      })
  }

  //Navigate to specific user details page
  GoToUserDetails(id: number){
    this.route.navigate(['user-details'], { queryParams: { id: id } })
  }

}
