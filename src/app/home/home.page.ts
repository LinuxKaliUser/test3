import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TextInputComponent } from '../text-input/text-input.component';
import { UiComponent } from '../input-controls/input-controls.component';
import { BatteryService } from '../services/battery.service';
import { Geolocation } from '@capacitor/geolocation';
import { Device } from '@capacitor/device';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
    imports: [IonHeader, IonToolbar, IonTitle, IonContent, TextInputComponent       , UiComponent]
})
export class HomePage implements OnInit {
  info: any;
  currentPosition!: string;
  constructor(public batteryService: BatteryService) { }
  ngOnInit() {
    this.printCurrentPosition();
  }

  async printCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.currentPosition = `Current position: ${coordinates.coords.latitude}, ${coordinates.coords.longitude}`;
  }
  async logBatteryInfo () {
    this.info = await Device.getBatteryInfo();
  };
}



