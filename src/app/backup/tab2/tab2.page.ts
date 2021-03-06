import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { LoadingController, ToastController } from '@ionic/angular';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  kd_user:string;
  username: string;
  password:string;
  nama:string;
  data;
  constructor(
    public http: Http,
    public toastCtrl: ToastController
  ) {}

  async showToast(toastMsg: string) {
    const toast = await this.toastCtrl.create({
      message: toastMsg,
      duration: 2000
    });
    toast.present();
  }

  simpan_data(){
    var apiURL = 'http://localhost/apipia/index.php/Welcome/postData/' 
    + this.kd_user + '/'+ this.username + '/' + this.password + '/' + this.nama;
    this.http.get(apiURL)
    .timeout(10000)
    .map(res => res.json()).subscribe((data) => {
      this.data = data;
    }, error => {
      console.log(error)
    });
    this.showToast("Berhasil tambah data!");
  }

}
