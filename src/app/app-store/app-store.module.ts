import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { reducers } from './reducers/reducers';
import { MainService } from './services/main.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers)
  ],
  declarations: [],
  providers: [ MainService ]
})

export class AppStoreModule {

}
