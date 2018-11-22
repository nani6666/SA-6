import { Component, OnInit, ViewChild } from '@angular/core';
import {RestapisService} from '../services/restapis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  @ViewChild('slickModal') slickModal;
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
  defaultsliderResponse: any;
  defaultstripResponse: any;
  defaultsidebarResponse: any;
  defaultribbon1Response: any;
  defaultribbon2Response: any;
  defaultribbon3Response: any;

  constructor(private _apiService: RestapisService , private router: Router) {
    this.httpErrorDispaly = false;
  }

  ngOnInit() {
    this.getAdverts();
    this.getDefaultsData();
    this.httpErrorDispaly = true; 
    console.log(this.slickModal);
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
     if (postApiData) {
      this.advertsmainresponse = postApiData.main.adverts.advert;
      if(this.advertsmainresponse.length !== 6){
        this.getDefaultsData();
      } 
     }
   }, error => {
     this._apiService.errorTracking(error.error.status , error.error.path);
   });
  }

public getDefaultsData() {
  this._apiService.getApiResponse('i4gorigin.advert.main/getDefaultAdvertsForAllSections').subscribe(getdata => {
    if (getdata) {
      this.defaultsAdvertsResponse = getdata.aDefault.adverts.advert;
      // // Array Sorted 
      //  const sortedArray =  this.defaultsAdvertsResponse.sort((n1,n2) => {
      // if (n1.sequence > n2.sequence) {
      //     return 1;
      // }
      // if (n1.sequence < n2.sequence) {
      //     return -1;
      // }
      // return 0;
      // });
      //  Sorted Array itteration
      this.defaultsAdvertsResponse.forEach(element => {
        console.log(element);
        if (element.sectionheading == 'SLIDER') {
          this.defaultsliderResponse  = element.sliders.slider;
         } 
         if (element.sectionheading == 'SIDEBAR') {
          this.defaultsidebarResponse = element.sidebars.sidebar;
         } 
        
        if (element.sectionheading == 'STRIP') {
         this.defaultstripResponse   = element.strips.strip
        }
         if (element.sectionheading == 'RIBBON1') {
         this.defaultribbon1Response = element.ribbons1.ribbon;
        } 
        if (element.sectionheading == 'RIBBON2') {
         this.defaultribbon2Response = element.ribbons2.ribbon;
        } 
        if (element.sectionheading == 'RIBBON3') {
         this.defaultribbon3Response = element.ribbons3.ribbon;
        } 
       
       });
       console.log(this.defaultstripResponse);
    }
   },error => {
    this._apiService.errorTracking(error.error.status , error.error.path);
    
   });
}


  onClick (param) {
    this.router.navigate(['/product', 'product'], {
      queryParams: { 'p': btoa(param)}
    });
  }
  slidercourosel( sshow , sscroll){
    const slideConfig = {
      'slidesToShow': sshow, 
      'slidesToScroll': sscroll,
      enabled: true,
      autoplay: true,
      draggable: true,
      dots: true,
      arrows: true
    };
    return  slideConfig;
  }
   cookieClose(){
    this.httpErrorDispaly = false;
   }

}
