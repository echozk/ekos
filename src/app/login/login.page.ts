import { Component } from '@angular/core';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { present } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage{

  username:string;
  password:string;
  data;
  
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public http: Http,
    public router: Router
  ) { }

async showToast(toastMsg: string){
  const toast = await this.toastCtrl.create({
    message: toastMsg,
    duration: 1000
  });
  toast.present();
}

showMsg(msg: string){
  this.alertCtrl.create({
    header: 'notifikasi',
    message: msg,
    buttons: ['OK']
  }).then((alert) => {
    alert.present();
  });
}

regist(){
  this.router.navigate(['regist'])
}

login(){
  if(this.username==null || this.password==null){
    this.showMsg('Harap isi username dan password anda terlebih dahulu');
  }
  else{
    // Alamat API untuk melakukan login
    let apiURL = 'http://localhost/apipia/index.php/login/login/'

    // Variabel formData adalah variabel untuk melempar
    // data ke API, karena method untuk melakukan
    // login adalah POST
    let formData = new FormData();
    formData.append('username',this.username); // Key1 untuk login adalah 'username'
    formData.append('password',this.password); // Key2 untuk login adalah 'password'

    // Syntax untuk menembak API
    this.http.post(apiURL, formData).timeout(10000).map(res=>res.json()).retry(5).subscribe((data) => {
      // Jika result JSON 'loginResult' == 'success' maka
      // akan pindah halaman
      if(data['loginResult'] == 'success'){
        console.log(data);

        // Me-reset textbox input
        this.username=null;
        this.password=null;

        // Syntax untuk pindah halaman ke halaman 'tabs'
        this.router.navigate(['tabs/tab1']);
      }
      // Jika tidak, maka akan menampilkan pesan error
      else{
        // Me-reset textbox input
        this.username=null;
        this.password=null;
        
        this.showMsg('Akun tidak tersedia');
      }
    }, error => {
      console.log(error)
    });
  }
}
}
