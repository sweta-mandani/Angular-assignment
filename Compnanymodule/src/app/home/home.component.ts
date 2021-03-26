import { Component, OnInit } from '@angular/core';
import { CrudService } from '../Compnanymodul/crud.service';
import{Compnanymodul} from '../Compnanymodul/compnanymodul';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Compnanymodul: Compnanymodul[] = [];

  constructor(public crudService: CrudService) { }

  ngOnInit() {

    this.crudService.getAll().subscribe((data: Compnanymodul[])=>{
      console.log(data);
      this.Compnanymodul = data;
    })  
  }

}