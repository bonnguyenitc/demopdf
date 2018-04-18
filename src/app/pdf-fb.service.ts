import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class PdfFbService {

  constructor(private db: AngularFireDatabase) { }

  create(pdf) {
    return this.db.list('/pdffile').push(pdf);
  }

  getAll() {
    return this.db.list('/pdffile');
  }

}
