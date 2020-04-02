import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductsAddComponent } from "./products-add/products-add.component";
import { ProductsEditComponent } from "./products-edit/products-edit.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductsComponent,
    data: { title: "List of Products" }
  },
  {
    path: "product-details/:id",
    component: ProductsDetailComponent,
    data: { title: "Product Details" }
  },
  {
    path: "product-add",
    component: ProductsEditComponent,
    data: { title: "Add product" }
  },
  {
    path: "product-edit/:id",
    component: ProductsEditComponent,
    data: { title: "Edit Product" }
  },
  { path: "", redirectTo: "/products", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
