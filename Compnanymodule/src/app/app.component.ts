import { Component, OnInit } from '@angular/core';

import { CrudService } from '../app/crud.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  allUser:any;
 


  constructor(public crudService: CrudService) { }
  ngOnInit(){
    this.getUser();
  }
  getUser(){
   this.crudService.getallUser().subscribe((response)=>{
  
      this.allUser = response;
  })
}

  
  
  
}
