import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule }       from '@angular/http';
import { Http } from '@angular/http';


// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AdministrationPage } from '../pages/administration/administration'
import { PizzaPage } from '../pages/pizza/pizza'
import { PanierPage } from '../pages/panier/panier';
import { NewPizzaPage } from '../pages/new-pizza/new-pizza';

// Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { Camera } from '@ionic-native/camera';

// Services
import { PizzaProvider } from '../providers/pizza/pizza';
import { PanierProvider } from '../providers/panier/panier';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AdministrationPage,
    PizzaPage,
    PanierPage,
    NewPizzaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AdministrationPage,
    PizzaPage,
    PanierPage,
    NewPizzaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PizzaProvider,
    PanierProvider,
    Camera
  ]
})
export class AppModule {}
