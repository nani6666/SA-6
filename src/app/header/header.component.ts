import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  topleftResponse: any;
  topleftItems: any;
  topRightResponse: any;
  topRightItems: any;
  mainRightResponse: any;
  mainRightCallNow: any;
  mainRightShoppingCart: any;
  mainLeftResponse: any;
  mainLogo: any;
  mainsearch: any;
  mainLeftItems: any;
  productSectors: any;
  serviceSectors: any;

  constructor(private _apiService: RestapisService) { }

  ngOnInit() {
   this.headerdata();
   this.productSectorsData();
   this.serviceSectorsData();
  }
  public headerdata() {
    this._apiService.getApiResponse('i4gorigin.advert.main/getHeaderStripProperties').subscribe( data => {
     if (data) {
      this.topleftResponse = JSON.parse(data.HeaderStrip.TopLeft);
      this.topleftItems = this.topleftResponse.items.item;
      this.topRightResponse = JSON.parse(data.HeaderStrip.TopRight);
      this.topRightItems =  this.topRightResponse.items.item;
      this. mainRightResponse = JSON.parse(data.HeaderStrip.MainRight);
      this.mainRightCallNow = (<any>this. mainRightResponse.items.item[0]);
      this.mainRightShoppingCart = (<any>this. mainRightResponse.items.item[1]);
      this.mainLeftResponse = JSON.parse(data.HeaderStrip.MainLeft);
      this.mainLogo = this.mainLeftResponse.items.item[0];
      this.mainsearch = this.mainLeftResponse.items.item[1];
     }
     }, err => {
      this._apiService.errorTracking(err.error.status , err.error.path);
     });
  }

  public productSectorsData() {
    this._apiService.getApiResponse('i4gorigin.listing/getProductSectorsAndIndustriesUrls').subscribe( data => {
      if (data) {
        this.productSectors = data.Product.Sector;
       }
    }, err => {
      this._apiService.errorTracking(err.error.status , err.error.path);
    });
  }
  public serviceSectorsData() {
    this._apiService.getApiResponse('i4gorigin.listing/getServiceSectorsAndIndustriesUrls ').subscribe( data => {
      if (data) {
        this.serviceSectors = data.Service.Sector;
       }
    }, err => {
      this._apiService.errorTracking(err.error.status , err.error.path);
    });
  }
}
