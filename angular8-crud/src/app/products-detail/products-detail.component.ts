import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../product';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss'],
})

export class ProductsDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params['id']);
  }

  product: Product = {
    _id: '',
    prod_name: '',
    prod_desc: '',
    prod_price: null,
    updated_at: null,
  };
  isLoadingResults = true;

  getProductDetails(id: any) {
    this.api.getProduct(id).subscribe((data: any) => {
      this.product = data;
      console.log(this.product);
      this.isLoadingResults = false;
    });
  }

  deleteProduct(id: any) {
    this.isLoadingResults = true;
    this.api.deleteProduct(id).subscribe(
      (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
