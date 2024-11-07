import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {

  private _move: EventEmitter<string> = new EventEmitter();

  constructor() { }

  get move(): EventEmitter<string>{
    return this._move;
  }
}
