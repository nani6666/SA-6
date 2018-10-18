import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  topleftResponse: any;
  topRightResponse:any;
  mainRightResponse: any;
  mainLeftResponse: any;

  constructor(private _apiService: RestapisService) { }

  ngOnInit() {
   this.headerdata();
  }
  public headerdata() {
    this._apiService.getApiResponse('getHeaderStripProperties').subscribe( data => {
     if(data){
      this.topleftResponse= JSON.parse(data.HeaderStrip.TopLeft);
      this.topRightResponse = JSON.parse(data.HeaderStrip.TopRight);
      this. mainRightResponse = JSON.parse(data.HeaderStrip.MainRight);
      this.mainLeftResponse = JSON.parse(data.HeaderStrip.MainLeft);
      console.log([this.topRightResponse , this.topleftResponse ,this.mainRightResponse , this.mainLeftResponse]);
     }
     }, err => {
       console.log(err);
     });
  }
}
