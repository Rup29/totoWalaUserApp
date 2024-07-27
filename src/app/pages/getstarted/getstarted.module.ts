import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { GetstartedPageRoutingModule } from './getstarted-routing.module';

import { GetstartedPage } from './getstarted.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetstartedPageRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [GetstartedPage]
})
export class GetstartedPageModule {}
