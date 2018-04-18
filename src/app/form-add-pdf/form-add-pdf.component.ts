import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-add-pdf',
  templateUrl: './form-add-pdf.component.html',
  styleUrls: ['./form-add-pdf.component.css']
})
export class FormAddPdfComponent implements OnInit {
  isShow = false;

  constructor(private  router: Router) { }

  ngOnInit() {
  }

  save(pdf) {
    this.isShow = true;
    this.router.navigate(['/pdf/add']);
  }

}
