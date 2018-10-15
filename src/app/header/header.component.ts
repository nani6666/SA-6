import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _apiService: RestapisService) { }

  ngOnInit() {
   this.headerdata();
  }
  public headerdata() {
    this._apiService.getApiResponse('getHeaderStripProperties').subscribe( data => {
      console.log(data);
     }, err => {
       console.log(err);
     });
  }
}
