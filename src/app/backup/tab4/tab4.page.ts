import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  data;
  npm;
  constructor(
    public http: Http,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getData();
  }
  
  // Fungsi untuk menampilkan data
  getData(){
    
    // Menangkap data yang dilemparkan dari tab1.page.html
    this.route.queryParams.subscribe(params =>{
      this.npm = params.npm;
    });

    // Alamat API
    var apiURL = 'http://localhost:8080/apiKu/index.php/Welcome/getDataWhere/' + this.npm;
    this.http.get(apiURL)
    .timeout(10000)
    .map(res => res.json()).subscribe((data) => {
      this.data = data
    }, error => {
      console.log(error)
    });
  }

}
