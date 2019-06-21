import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

// FontAwesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Setup FontAwesome
/*import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab, far, fas);*/

import { AppComponent } from './components/app/app.component';

/*import {
  // MatRippleModule
  // MatNativeDateModule,
} from '@angular/material';*/

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

export const DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

import {
  CovalentCommonModule,
  CovalentLayoutModule,
  CovalentMediaModule,
  CovalentExpansionPanelModule,
  CovalentStepsModule,
  CovalentDialogsModule,
  CovalentSearchModule,
  CovalentPagingModule,
  CovalentNotificationsModule,
  CovalentMenuModule,
  CovalentDataTableModule
} from '@covalent/core';

import { CovalentLoadingModule } from '@covalent/core/loading';

import { CovalentMessageModule } from '@covalent/core/message';

import { MomentModule } from 'ngx-moment';

import { TdMediaService } from '@covalent/core/media';

import { FooterComponent } from './components/footer/footer.component';
import { SignInComponent } from './components/account/sign-in/sign-in.component';
import { SignUpComponent } from './components/account/sign-up/sign-up.component';
import { SocialSignInComponent } from './components/account/social-sign-in/social-sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ValidationHandlerDirective } from './directives/validation-handler.directive';
import { ResponsiveCardContainerComponent } from './components/shared/responsive-card-container/responsive-card-container.component';

import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { MessageTransformPipe } from './pipes/error-transform.pipe';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,

    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    // MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    // MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatChipsModule,

    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,

    /** Font Awesome */
    FontAwesomeModule,

    AppRoutingModule,

    MomentModule,
    LoggerModule.forRoot({ serverLoggingUrl: '', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.OFF })
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    SocialSignInComponent,
    HomeComponent,
    NotificationsComponent,
    ValidationHandlerDirective,
    ResponsiveCardContainerComponent,

    MessageTransformPipe
  ],
  providers: [
    TdMediaService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
