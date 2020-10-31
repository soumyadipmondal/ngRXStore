import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/shared/data.service';

import * as fromData from '../store/reducres/data.reducer'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularstore';
  dataChunk = new Observable();
  constructor(private _dataService: DataService){}

  ngOnInit(){
    this.dataChunk = this._dataService.getData();
  }
}
