import { Component, OnInit } from '@angular/core';
import { ListTemp,ListTempHolder,ListItem } from './listTemp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'marketList';
  listTemp = new ListTemp("goktug");
  listTempHolder=new ListTempHolder();

  ngOnInit(): void {
    console.log(this.listTempHolder.listTemps[0]);
  }
  getHolder(){
    return this.listTempHolder.listTemps;
  }
  getOwner(){
    return this.listTemp.listOwner;
  }
  getItems(){
    return this.listTemp.itemss;
  }
}