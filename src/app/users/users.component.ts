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

  getUsers(){
    this.dictionaryService.GetUsers().subscribe(
      (data)=>{
        this.users = data;
        console.log(data);
        
      })
  }
  GetUserDetails(id: number){
    this.route.navigate(['user-details'], { queryParams: { id: id } })
  }

}
