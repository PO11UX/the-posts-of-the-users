import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DictionaryService {

    constructor(private  api: HttpClient) {
    }
  
  GetUsers() {
    return this.api.get('https://jsonplaceholder.typicode.com/users')
  }
  GetUserDetails(id: number){
    return this.api.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
  GetPosts(id: number){
    return this.api.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
