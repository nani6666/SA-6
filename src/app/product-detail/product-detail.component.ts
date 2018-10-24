import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RestapisService} from '../services/restapis.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(private route: ActivatedRoute,
             private _apiService: RestapisService) { }

  ngOnInit() {
    this.getProductDetail();
    this.sub = this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
   });
  }

  public getProductDetail() {
    const productDetial = {
      'Product': {
       'I4GProductCode': 'SE00003P1537018283291'
         }
      };

    this._apiService.postApiResponse('/i4gorigin.listing/getPageProductDetail', productDetial).subscribe( data => {
      console.log(data);
    }, error => {
    });
  }

}
