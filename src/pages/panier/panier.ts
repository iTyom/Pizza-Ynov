import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


import { PanierProvider } from '../../providers/panier/panier';
import { Pizza } from '../../modeles/pizza';
/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {

  panier: Pizza[];
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private panierProvider: PanierProvider) {
  }

  ionViewDidLoad() {
    this.panier = this.panierProvider.getPanier();
  }

  removePizzaPanier(pizza: Pizza) {
      this.panier.splice(pizza);
  }

}
