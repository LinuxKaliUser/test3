import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Battery } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class BatteryService {
  batteryLevel: number | undefined;

  constructor() {
    this.getBatteryStatus();
  }

  async getBatteryStatus() {
    const batteryInfo = await Battery['getStatus']();
    this.batteryLevel = batteryInfo.batteryLevel;
  }
}