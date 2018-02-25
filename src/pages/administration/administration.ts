import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

//Modeles
import { Pizza } from '../../modeles/pizza';


//Provider
import { PizzaProvider } from '../../providers/pizza/pizza';

/**
 * Generated class for the AdministrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administration',
  templateUrl: 'administration.html',
})
export class AdministrationPage {

  allPizza: Pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaProvider: PizzaProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.pizzaProvider.get().then(data => {
      this.allPizza = data;
    });
  }

  deleteToast() {
    let toast = this.toastCtrl.create({
      message: 'Pizza supprimée',
      duration: 2500,
      position: "top"
    });

    toast.present();
  }

  removePizza(pizza: Pizza)
  {
    this.pizzaProvider.delete(pizza.id).then(data => {
       location.reload();
    });
    this.deleteToast();
  }

}
