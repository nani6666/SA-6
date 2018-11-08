import { Component, OnInit } from '@angular/core';
import {RestapisService} from '../services/restapis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {
  slideConfig = {
  'slidesToShow': 1, 'slidesToScroll': 1,
  enabled: true,
  autoplay: true,
  draggable: true,
  dots: true,
  arrows: true
};

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

  constructor(private _apiService: RestapisService , private router: Router) {}

  ngOnInit() {
    this.getAdverts();
    this.getDefaultsData();
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
      this.advertsmainresponse.forEach(element => {
       if (element.sectionheading == 'STRIP') {
        this.stripResponse   = this.advertsmainresponse.slice(0, 1);
       } else {
        this.stripResponse   = this.defaultsAdvertsResponse.slice(0, 1);
       }
       if (element.sectionheading == 'SLIDER') {
        this.sliderResponse  = this.advertsmainresponse.slice(1, 2);
       } else {
        this.sliderResponse  = this.defaultsAdvertsResponse.slice(1, 2);
       }
       if (element.sectionheading == 'SIDEBAR') {
        this.sidebarResponse = this.advertsmainresponse.slice(2, 3);
       } else {
        this.sidebarResponse = this.defaultsAdvertsResponse.slice(2, 3);
       }
       if (element.sectionheading == 'RIBBON1') {
        this.ribbon1Response = this.advertsmainresponse.slice(3, 4);
       } else {
        this.ribbon1Response = this.defaultsAdvertsResponse.slice(3, 4);
       }
       if (element.sectionheading == 'RIBBON2') {
        this.ribbon2Response = this.advertsmainresponse.slice(4, 5);
       } else {
        this.ribbon2Response = this.defaultsAdvertsResponse.slice(4, 5);
       }
       if (element.sectionheading == 'RIBBON3') {
        this.ribbon3Response = this.advertsmainresponse.slice(5, 6);
       } else {
        this.ribbon3Response = this.defaultsAdvertsResponse.slice(5, 6);
       }
      });
      // this.dataBinding(postApiData.main);
     } else {

    }
   }, error => {
   });
  }

public getDefaultsData() {
  this._apiService.getApiResponse('i4gorigin.advert.main/getDefaultAdvertsForAllSections').subscribe(getdata => {
    if (getdata) {
      this.defaultsAdvertsResponse = getdata.aDefault.adverts.advert;
    }
   }, error => {
   });
}


  onClick (param) {
    this.router.navigate(['/product', 'product'], {
      queryParams: { 'p': btoa(param)}
    });
  }


//  plusSlides(n) {
//   this.showSlides(this.slideIndex += n);
// }

//  currentSlide( n ) {
//   this.showSlides(this.slideIndex =  n );
// }

//  showSlides(n) {
//   let i;
//   const slides = document.getElementsByClassName('mySlides');
//   const dots = document.getElementsByClassName('dot');
//   if ( n > slides.length) {
//     this.slideIndex = 1 ;
//   }
//   if (n < 1) {
//     this.slideIndex = slides.length ;
//   }
//   for (i = 0; i < slides.length; i++) {
//     (<any>slides[i]).style.display = 'none';
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(' active', '');
//   }
//   (<any> slides[this.slideIndex - 1]).style.display = 'block';
//   dots[this.slideIndex - 1].className += ' active';
// }

}
