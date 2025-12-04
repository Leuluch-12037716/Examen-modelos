import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public getJsonValue: any;
  public postJsonValue: any;
  constructor(private http: HttpClient){
  }

  ngOnInit(): void{
    this.getMethod();
    this.postMethod();
  }

  public getMethod(){
    this.http.get('https://modelos-a3b04-default-rtdb.firebaseio.com/.json')
          /* https://jsonplaceholder.typicode.com/posts/1 */
          .subscribe((data) => {
          console.log(data);
          this.getJsonValue = data;
      });
  }
  public postMethod (){
    let body = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
     this.http.post('https://jsonplaceholder.typicode.com/posts', body)
    .subscribe((data) => {
      console.log(data);
      this.postJsonValue = data;
    });
  }
}
