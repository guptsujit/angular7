import { AppRoutingRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injector, APP_INITIALIZER, NgModule } from '@angular/core';
import { LOCATION_INITIALIZED } from '@angular/common';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { AngularSlickgridModule } from './modules/angular-slickgrid/modules/angular-slickgrid.module';
import { CommonGridComponent } from './examples/common-grid/common-grid.component';
import { CustomGridComponent } from './examples/custom-grid/custom-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SlickgridModule } from 'angular-slickgrid';


// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatPaginatorModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatSortModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
//   MatStepperModule
// } from '@angular/material';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// use an Initializer Factory as describe here: https://github.com/ngx-translate/core/issues/517#issuecomment-299637956
export function appInitializerFactory(translate: TranslateService, injector: Injector) {
  return () => new Promise<any>((resolve: any) => {
    const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(null));
    locationInitialized.then(() => {
      const langToSet = 'en';
      translate.setDefaultLang('en');
      translate.use(langToSet).subscribe(() => {
        // console.info(`Successfully initialized '${langToSet}' language.'`);
      }, err => {
        console.error(`Problem with '${langToSet}' language initialization.'`);
      }, () => {
        resolve(null);
      });
    });
  });
}

// @dynamic
@NgModule({
  declarations: [
    AppComponent,
    // GridAddItemComponent,
    // GridBasicComponent,
    // GridClientSideComponent,
    // GridColspanComponent,
    // GridDraggableGroupingComponent,
    // GridEditorComponent,
    // GridFormatterComponent,
    // GridGraphqlComponent,
    // GridGroupingComponent,
    // GridHeaderButtonComponent,
    // GridHeaderMenuComponent,
    // GridLocalizationComponent,
    // GridMenuComponent,
    // GridOdataComponent,
    // GridRemoteComponent,
    // GridRowMoveComponent,
    // GridRowSelectionComponent,
    // GridStateComponent,
    // SwtCommonGridTestComponent,
    // SwtCommonGridPaginationComponent,
    // SwtCommonGridComponent,
    // HomeComponent,
    CommonGridComponent,
    CustomGridComponent
  ],
  imports: [
    AppRoutingRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    AngularSlickgridModule.forRoot({
      // add any Global Grid Options/Config you might want
      // to avoid passing the same options over and over in each grids of your App
      enableAutoResize: true,
      autoResize: {
        containerId: 'grid-container',
        sidePadding: 15
      }
    }),
    BrowserAnimationsModule,
    // BrowserAnimationsModule,
    // //START : Material Modules
    //   MatAutocompleteModule,
    //   MatButtonModule,
    //   MatButtonToggleModule,
    //   MatCardModule,
    //   MatCheckboxModule,
    //   MatChipsModule,
    //   MatDatepickerModule,
    //   MatDialogModule,
    //   MatExpansionModule,
    //   MatGridListModule,
    //   MatIconModule,
    //   MatInputModule,
    //   MatListModule,
    //   MatMenuModule,
    //   MatNativeDateModule,
    //   MatPaginatorModule,
    //   MatProgressBarModule,
    //   MatProgressSpinnerModule,
    //   MatRadioModule,
    //   MatRippleModule,
    //   MatSelectModule,
    //   MatSidenavModule,
    //   MatSliderModule,
    //   MatSlideToggleModule,
    //   MatSnackBarModule,
    //   MatSortModule,
    //   MatTableModule,
    //   MatTabsModule,
    //   MatToolbarModule,
    //   MatTooltipModule,
    //   MatStepperModule
    // //END : Material Modules 
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [TranslateService, Injector],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
