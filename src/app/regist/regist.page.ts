import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { LoadingController, ToastController } from '@ionic/angular';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-regist',
  templateUrl: 'regist.page.html',
  styleUrls: ['regist.page.scss'],
})
export class RegistPage{

  username: string;
  password:string;
  nama:string;
  domisili:string;
  data;
  constructor(
    public http: Http,
    public toastCtrl: ToastController,
    private router: Router
  ) {}

  async showToast(toastMsg: string) {
    const toast = await this.toastCtrl.create({
      message: toastMsg,
      duration: 2000
    });
    toast.present();
  }

  daftar(){
    var apiURL = 'http://localhost/apipia/index.php/Welcome/postData/' 
    + this.username + '/' + this.password + '/' + this.nama + '/' + this.domisili;
    this.http.get(apiURL)
    .timeout(10000)
    .map(res => res.json()).subscribe((data) => {
      this.data = data;
    }, error => {
      console.log(error)
    });
    this.showToast("Berhasil Registrasi!");
    this.router.navigate(['login']);
  }

}