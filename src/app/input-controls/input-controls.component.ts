// ui.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-input-controls',
  templateUrl: './input-controls.component.html',
  styleUrls: ['./input-controls.component.scss'],
  standalone: true,
  imports: [ FormsModule, IonicModule]
})
export class UiComponent {
  text = '';
  rangeValue = 0;
  color = 'red';

  constructor(public toastController: ToastController) {}



  async presentToast() {
    const toast = await this.toastController.create({
      message: `You selected ${this.color}`,
      duration: 2000
    });
    toast.present();
  }

}