import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', redirectTo: '/' },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: 'contact', component: ContactComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
