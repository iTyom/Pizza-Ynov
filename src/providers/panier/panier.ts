import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Pizza } from '../../modeles/pizza';

import 'rxjs/add/operator/map';

/*
  Generated class for the PanierProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PanierProvider {
  panier: Pizza[];

  constructor(public http: HttpClient, private storage: Storage) {
    this.panier = [];
  }

  getPanier() {
   return this.panier;
 }

 addPanier(pizza){
    this.panier.push(pizza);
  }




}
