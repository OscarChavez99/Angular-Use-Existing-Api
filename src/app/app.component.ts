import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { user } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  form = new FormGroup({
    searchID: new FormControl<number | null>(null, Validators.required),
  });
  
  user = new user();

  constructor(private httpClient: HttpClient) { }

  getUser() {
    const searchIDValue = this.form.get('searchID')?.value;

    this.httpClient.get<user>(`https://jsonplaceholder.typicode.com/todos/${searchIDValue}`).subscribe(user => {
      this.user.id = user.id;
      this.user.title = user.title;
      this.user.completed = user.completed;
    }); 
  }
}
