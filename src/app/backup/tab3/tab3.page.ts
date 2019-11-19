import { Component } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  data;
  constructor(
    public http: Http
  ) {}

  ionViewWillEnter(){
    this.getData();
  }

  getData(){
    var apiURL = 'http://localhost/apipia/index.php/Welcome/getData/'
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
