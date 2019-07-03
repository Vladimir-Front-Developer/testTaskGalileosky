import { Injectable } from '@angular/core';
import reference from 'src/app/config/reference.js';

@Injectable({ providedIn: 'root' })
export class LocalService {
  private ref: reference
  constructor(){
    this.set('wordList', reference.wordList)
    this.set('wordReference', reference.wordReference)
  }
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
