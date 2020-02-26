import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ContactTemplateFormComponent } from './contact/contact-template-form/contact-template-form.component';
import { ContactReactiveFormComponent } from './contact/contact-reactive-form/contact-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    ContactComponent,
    NavigationComponent,
    NotFoundPageComponent,
    ContactTemplateFormComponent,
    ContactReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
