import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

//Pages
import { PizzaPage } from '../pizza/pizza'


//Modeles
import { Pizza } from '../../modeles/pizza';

//Provider
import { PizzaProvider } from '../../providers/pizza/pizza';
import { PanierProvider } from '../../providers/panier/panier';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pizzas: [Pizza];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public PizzaProvider: PizzaProvider, public toast: ToastController, public panierProvider: PanierProvider) {


  }

  ionViewDidLoad() {
    this.PizzaProvider.get().then(data => {
      this.pizzas = data
    });
  }




  showPizza(pizza: Pizza){
     let profileModal = this.modalCtrl.create(PizzaPage, {'data': pizza});
     profileModal.present();
  }
}
