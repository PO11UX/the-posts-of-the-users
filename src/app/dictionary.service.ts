import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {

    constructor(private  api: HttpClient) {
    }
  

  // Fetch users list from database
  GetUsers() {
    return this.api.get('https://jsonplaceholder.typicode.com/users')  
  }
  // Fetch specific user data by it's id 
  GetUserDetails(id: number){
    return this.api.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  // Fetch posts of specific user
  GetPosts(id: number){
    return this.api.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
