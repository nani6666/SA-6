import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestapisService} from '../services/restapis.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: number;
  private sub: any;
  price: any;
  productName: any;
  productCode: any;
  productImages: any;
  sectorName: any;
  industryName: any;
  availability: any;
  productSpecs: any;
  constructor(private route: ActivatedRoute,
             private _apiService: RestapisService) { }

  ngOnInit() {
    this.sub = this.route.snapshot.queryParams['p'];
    this.getProductDetail();
  }

  public getProductDetail() {
    const productDetial = {
      'Product': {
       'I4GProductCode': atob(this.sub)
         }
      };

    this._apiService.postApiResponse('/i4gorigin.listing/getPageProductDetail', productDetial).subscribe( data => {
      if (data) {
       this.productName = data.Product.ProductName;
       this.sectorName = data.Product.SectorName;
       this.industryName = data.Product.IndustryName;
       this.productSpecs = data.Product.Specs.Spec;
       this.productImages = data.Product.Images.url;
       if (data.Product.SampleAvailability == 'Y') {
        this.availability = true;
       } else {
        this.availability = false;
       }
       this.productCode = data.Product.I4gProductCode;
       if (data.Product.Price == '' || data.Product.Price == undefined) {
        this.price = 0.00;
       } else {
        this.price = data.Product.Price;
       }
      }
      console.log(data);
    }, error => {
    });
  }

}
