import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RbjPageRoutingModule } from './rbj-routing.module';

import { RbjPage } from './rbj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RbjPageRoutingModule
  ],
  declarations: [RbjPage]
})
export class RbjPageModule {}
