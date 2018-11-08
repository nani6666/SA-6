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
  "slidesToShow": 1, "slidesToScroll": 1,
  enabled: true,
  autoplay: true,
  draggable: true,
  dots:true,
  arrows: true
};

  slideIndex: any;
  dotsLength: any;
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
    // this.slideIndex = 1;
    // this.showSlides(this.slideIndex);
    // this.currentSlide(this.slideIndex);
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
      this.dataBinding(postApiData);
     } else {
    }
   }, error => {
   });
  }

public getDefaultsData() {
  this._apiService.getApiResponse('i4gorigin.advert.main/getDefaultAdvertsForAllSections').subscribe(getdata => {
    if (getdata) {
      this.dataBinding(getdata);
    }
   }, error => {
   });
}

  public dataBinding(data) {
       if (data.main.adverts.advert) {
       this.advertsmainresponse = data.main.adverts.advert;
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(0, 1)) {
        this.stripResponse   = this.advertsmainresponse.slice(0, 1);
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(1, 2)) {
        this.sliderResponse  = this.advertsmainresponse.slice(1, 2);
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(2, 3)) {
        this.sidebarResponse = this.advertsmainresponse.slice(2, 3);
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(3, 4)) {
        this.ribbon1Response = this.advertsmainresponse.slice(3, 4);
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(4, 5)) {
        this.ribbon2Response = this.advertsmainresponse.slice(4, 5);
       } else {
        this.getDefaultsData();
       }
       if (this.advertsmainresponse.slice(5, 6)) {
        this.ribbon3Response = this.advertsmainresponse.slice(5, 6);
       } else {
        this.getDefaultsData();
       }
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
