import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './test.service';
import { environment } from 'src/environments/environment';
import { SharedModule } from '../shared/shared.module';

const loggerType = environment.logger;
@NgModule({
  declarations: [],
  providers: [
    { provide: TestService, useClass: TestService }
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot()
  ]
})
export class CoreModule { }
