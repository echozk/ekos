import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Http } from '@angular/http';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page{

  data;
  constructor(private router: Router,public http: Http) { }

  logout() {
    this.router.navigate(['login'])
  }

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    var apiURL = 'http://192.168.100.10/apiEKO/index.php/Welcome/getData/'
    let headers = new Headers();
    this.http.get(apiURL)
    .timeout(10000)
    .map(res => res.json()).subscribe((data) => {
      this.data = data;
    }, error => {
      console.log(error)
    });
  }

  ionViewDidLoad(){
    console.log('ionViewDidLoad InfoPage');
  }

}