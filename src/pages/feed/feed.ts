import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public NomeUsuario:string = "Paulo Lins do código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public SomaDoisNumeros(num1:number, num2:number): void { 
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.SomaDoisNumeros(7, 99);
  }

}
