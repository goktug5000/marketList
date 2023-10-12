import { Component, OnInit } from '@angular/core';
import { ListTemp,ListTempHolder,ListItem } from './listTemp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'marketList';
  listTemp = new ListTemp('denek kişi',[
    new ListItem('denek nesne 1',1),
    new ListItem('denekmut',2)
  ])


  listTempHolder = new ListTempHolder([
    new ListTemp('goktug',[
      new ListItem('elma',3),
      new ListItem('armut',2)
    ]),
    new ListTemp('aç mehmet',[
      new ListItem('elma',35),
      new ListItem('püskevit',50),
      new ListItem('süt',20)
    ]),
    new ListTemp('ahmet',[
      new ListItem('su',3),
      new ListItem('ekmek',1)
    ])
  ])


  ngOnInit(): void {
    //console.log(this.listTempHolder.listTemps[0]);
  }
  
  getListTemps():ListTemp[]{
    return this.listTempHolder.listTemps;
  }
  getOwner(){
    return this.listTemp.listOwner;
  }
  getItems(){
    return this.listTemp.itemss;
  }
  getExampleListTemp(){
    return this.listTemp;
  }
  

  addItem(value:any){
    console.log("addItem()");
    if(value!=""){
      
      for(var i=0;i<this.getListTemps().length;i++)
      {
        
      }
      
      this.getListTemps().forEach(function (value) {
        //console.log(value);
        //console.log(value["inAddList"]);
      });
    }

  }





}