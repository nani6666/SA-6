import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private _apiService: RestapisService) { }

  ngOnInit() {
    this.footerdata();
  }
  public footerdata() {
    this._apiService.getApiResponse('getFooterStripProperties').subscribe( data => {
      console.log(data);
     }, err => {
       console.log(err);
     });
  }
}
