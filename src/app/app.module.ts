// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { PremierComponentComponent } from './premier-component/premier-component.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';

// Services
import {AppareilService} from './services/appareil.service';
import {AuthService} from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

// Routes of application
const appRoutes: Routes = [
    {path: 'appareils', component: AppareilViewComponent},
    {path: 'appareils/:id', component: SingleAppareilComponent},
    {path: 'auth', component: AuthComponent},
    {path: '', component: AppareilViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PremierComponentComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      AppareilService,
      AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
