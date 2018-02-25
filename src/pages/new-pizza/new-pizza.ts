import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

//Modeles
import { Pizza } from '../../modeles/pizza';

//Provider
import { PizzaProvider } from '../../providers/pizza/pizza';
/**
 * Generated class for the NewPizzaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-pizza',
  templateUrl: 'new-pizza.html',
})
export class NewPizzaPage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  picture:string;
  pizza: Pizza;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public PizzaProvider: PizzaProvider, public toastCtrl: ToastController) {
    this.pizza = {id: 0, name: "", desc: "", picture: "", price: 0, ingredient_ids: []};
    this.picture = "data:image/jpeg;base64,";
  }

  ionViewDidLoad() {

  }

  takePhoto(event){
    this.camera.getPicture(this.options).then((imageData) => {
     this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  newToast() {
    let toast = this.toastCtrl.create({
      message: 'Pizza ajoutée',
      duration: 2500,
      position: "top"
    });

    toast.present();
  }

  newPizza(pizza: Pizza) {
    this.pizza = pizza;
    this.pizza.picture = this.picture;
    this.PizzaProvider.add(this.pizza).then(data => {
      location.reload();
    });
    this.newToast();
  }





}
