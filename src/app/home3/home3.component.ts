import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  advertsmainresponse: any;
  sliderResponse: any;
  stripResponse: any;
  sidebarResponse: any;
  ribbon1Response: any;
  ribbon2Response: any;
  ribbon3Response: any;

  constructor(private _apiService: RestapisService , private router: Router) { }

  ngOnInit() {
    this.getAdverts();
  }

  public getAdverts() {
    const advertsRequestData = {
      'Advert': {
        'IndianDate': '2018-10-10',
            'IndianTime': '10:10:10'
      }
    };
   this._apiService.postApiResponse('i4gorigin.advert.main/getAllAvailableAdvertsSectionsForMain' , advertsRequestData).subscribe(data => {
     if (data) {
      this.advertsmainresponse = data.main.adverts.advert;
      this.stripResponse   = this.advertsmainresponse.slice(0, 1);
      this.sliderResponse  = this.advertsmainresponse.slice(1, 2);
      this.sidebarResponse = this.advertsmainresponse.slice(2, 3);
      this.ribbon1Response = this.advertsmainresponse.slice(3, 4);
      this.ribbon2Response = this.advertsmainresponse.slice(4, 5);
      this.ribbon3Response = this.advertsmainresponse.slice(5, 6);
      console.log(this.stripResponse);
     }
   }, error => {
   });
  }

  onClick (param) {
    this.router.navigate(['/product-details'],  { queryParams: { order: param } });
  }
}
