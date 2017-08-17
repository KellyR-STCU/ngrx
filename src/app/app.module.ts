import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

// 3rd party libs
import * as ngMaterialModules from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { AppStoreModule } from './app-store/app-store.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpModule,
        ngMaterialModules.MdToolbarModule,
        ngMaterialModules.MdIconModule,
        ngMaterialModules.MdButtonModule,
        ngMaterialModules.MdCardModule,
        ngMaterialModules.MdTooltipModule,
        ngMaterialModules.MdInputModule,
        AppStoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
