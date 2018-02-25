import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';


//Providers
import { PanierProvider } from '../../providers/panier/panier';

//Modeles
import { Pizza } from '../../modeles/pizza';

/**
 * Generated class for the PizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza',
  templateUrl: 'pizza.html',
})
export class PizzaPage {

  pizza: Pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toast: ToastController, public viewCtrl: ViewController, private storage: Storage, public panierProvider: PanierProvider) {
    this.pizza = this.navParams.get('data');
  }

  ionViewDidLoad() {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  presentToast(pizza: Pizza) {
    let toast = this.toast.create({
      message: 'Votre pizza a bien été ajoutée à votre panier',
      duration: 2500,
      position: "top"
    });

    this.panierProvider.addPanier(pizza);

    toast.present();
  }

}
