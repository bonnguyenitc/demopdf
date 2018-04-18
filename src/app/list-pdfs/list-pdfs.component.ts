import {Component, OnInit, ViewChild} from '@angular/core';
import {PdfFbService} from '../pdf-fb.service';
import {PdfFile} from '../models/pdffile';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-list-pdfs',
  templateUrl: './list-pdfs.component.html',
  styleUrls: ['./list-pdfs.component.css']
})
export class ListPdfsComponent implements OnInit {
  pdfs: PdfFile[] = [];
  displayedColumns = ['position', 'title'];
  dataSource;
  index = 0;
  constructor(private  pdfService: PdfFbService) {
    this.pdfService.getAll().subscribe(pdf => {
      pdf.map((value, id) => this.pdfs.push({ position: id, title: value.title}));
      // this.pdfs = pdf;
      // console.log('aa', this.pdfs);
      this.dataSource = new MatTableDataSource<PdfFile>(this.pdfs);
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }
}


