import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent 
{
    username:any="";
    password:any="";
    data="";
    public fun(username,password)
    {
      this.username=username;
      this.password=password;
      this.data="Welcome to Marvellous System : "
      
    }
}
