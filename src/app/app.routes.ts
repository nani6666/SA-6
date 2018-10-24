import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Home3Component } from './home3/home3.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

// Route Configuration
export const routes: Routes = [
    { path: '', component: Home3Component },
    { path: 'Home', component: Home3Component },
    { path: 'product', component: ProductComponent },
    { path: 'product-details/:id', component: ProductDetailComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
