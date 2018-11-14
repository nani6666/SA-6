import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footer: any[] ;
  constructor(private _apiService: RestapisService) { }

  ngOnInit() {
    this.footerdata();
  }
  public footerdata() {
    this._apiService.getApiResponse('i4gorigin.advert.main/getFooterStripProperties').subscribe( data => {
      if (data) {
        const footerResponse = JSON.parse(data.FooterStrip.Main);
        this.footer = footerResponse.items.item ;
      }
     }, err => {
      this._apiService.errorTracking(err.error.status , err.error.path);
     });
  }
}
