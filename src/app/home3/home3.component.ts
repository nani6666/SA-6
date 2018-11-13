import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';
import { Router } from '@angular/router';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  httpCode: any;
  httpErrorDispaly: boolean ;
  slideIndex: any;
  dotsLength: any;
  defaultsAdvertsResponse: any;
  advertsmainresponse: any;
  sliderResponse: any;
  stripResponse: any;
  sidebarResponse: any;
  ribbon1Response: any;
  ribbon2Response: any;
  ribbon3Response: any;

  constructor(private _apiService: RestapisService , private router: Router) {
    this.httpErrorDispaly = false;
  }

  ngOnInit() {
    this.getAdverts();
  //  this.getDefaultsData();
    
  }

  public getAdverts() {
    const advertsRequestData = {
      'Advert': {
        'IndianDate': '2018-10-20',
            'IndianTime': '08:00:00'
      }
    };
   this._apiService.postApiResponse('i4gorigin.advert.main/getAllAvailableAdvertsSectionsForMain',
   advertsRequestData).subscribe(postApiData => {
    this.httpErrorDispaly = false;
     if (postApiData) {
      this.advertsmainresponse = postApiData.main.adverts.advert;
      if(this.advertsmainresponse.length !== 6){
        this.getDefaultsData();
      } 
     }
   }, error => {
    this.httpErrorDispaly = true;
    this.httpCode = error.status + "-" + error.statusText;
   });
  }

public getDefaultsData() {
  this._apiService.getApiResponse('i4gorigin.advert.main/getDefaultAdvertsForAllSections').subscribe(getdata => {
    if (getdata) {
      this.defaultsAdvertsResponse = getdata.aDefault.adverts.advert;
      // Array Sorted 
       const sortedArray =  this.defaultsAdvertsResponse.sort((n1,n2) => {
      if (n1.sequence > n2.sequence) {
          return 1;
      }
      if (n1.sequence < n2.sequence) {
          return -1;
      }
      return 0;
      });
      //  Sorted Array itteration
      sortedArray.forEach(element => {
         if (element.sectionheading == 'RIBBON1') {
         this.ribbon1Response = element.ribbons1.ribbon;
        } 
        if (element.sectionheading == 'RIBBON2') {
         this.ribbon2Response = element.ribbons2.ribbon;
        } 
        if (element.sectionheading == 'RIBBON3') {
         this.ribbon3Response = element.ribbons3.ribbon;
        } 
        if (element.sectionheading == 'SIDEBAR') {
          this.sidebarResponse = element.sidebars.sidebar;
         } 
        if (element.sectionheading == 'SLIDER') {
         this.sliderResponse  = element.sliders.slider;
        } 
        if (element.sectionheading == 'STRIP') {
         this.stripResponse   = element.strips.strip
        }
       });
    }
   },error => {
    this.httpErrorDispaly = true;
    this.httpCode = error.status + "-" + error.statusText;
   });
}


  onClick (param) {
    this.router.navigate(['/product', 'product'], {
      queryParams: { 'p': btoa(param)}
    });
  }
  slidercourosel( sshow , sscroll){
    const slideConfig = {
      'slidesToShow': sshow, 'slidesToScroll': sscroll,
      enabled: true,
      autoplay: true,
      draggable: true,
      dots: true,
      arrows: true
    };
    return  slideConfig;
  }
   errorClose(){
    this.httpErrorDispaly = false;
   }

}
