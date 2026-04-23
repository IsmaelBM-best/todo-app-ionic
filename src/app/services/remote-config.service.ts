import { Injectable } from '@angular/core';
import { RemoteConfig, fetchAndActivate, getValue } from '@angular/fire/remote-config';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService {

  constructor(private remoteConfig: RemoteConfig) {}

  async init() {
    this.remoteConfig.settings.minimumFetchIntervalMillis = 0; 
    await fetchAndActivate(this.remoteConfig);
  }

  getFlag() {
    return getValue(this.remoteConfig, 'enableCategories').asBoolean();
  }
}