import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jsPDF = require('jspdf');
import pdfJsLib = require('pdfjs-dist');


@Component({
  selector: 'app-detail-pdf',
  templateUrl: './detail-pdf.component.html',
  styleUrls: ['./detail-pdf.component.css']
})
export class DetailPdfComponent implements OnInit {
  title;
  urlPdf;
  pdfSrc;
  filePdf;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {
    this.title = this.route.snapshot.paramMap.get('id');
    this.urlPdf = '../../assets/' + this.title;
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');

    this.httpClient.get(this.urlPdf, {headers: headers, responseType: 'arraybuffer'}).pipe().subscribe(data => {
        this.filePdf = new Uint8Array(data);
        const doc = new jsPDF();
        this.pdfSrc  = doc.arrayBufferToBase64(data);
        const pdfData = atob(this.pdfSrc);
        const loadingTask = pdfJsLib.PDFJS.getDocument({data: this.filePdf})
        .then(function(pdf) {
            const pageNumber = 1;
            pdf.getPage(pageNumber).then(function(page) {
              // console.log('Page loaded');
                const scale = 1.3;
                const viewport = page.getViewport(scale);
                // Prepare canvas using PDF page dimensions
                const canvas = document.getElementById('the-canvas');
                const context = canvas.getContext('2d');
                canvas.height = viewport.height;
                canvas.width = viewport.width;
                // Render PDF page into canvas context
                const renderContext = {
                  canvasContext: context,
                  viewport: viewport
                };
              const renderTask = page.render(renderContext);
              renderTask.then(function () {
                // console.log('Page rendered');
              });
            });
        }, function (reason) {
        // PDF loading error
        console.error(reason);
      });
    });
  }

  save(f) {
    this.drawForm(f.title, f.so, f.ngay);
  }

  download() {
    try {
      const canvas = document.getElementById('the-canvas');
      canvas.getContext('2d');
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'jpeg', 0, 0);
      const namefile = prompt('insert name of file');
      pdf.save(namefile + '.pdf');
      console.log(pdf.output('dataurl'));
    } catch (e) {
      alert('Error description: ' + e.message);
    }
  }

  drawForm(title, so, ngay) {
    const canvas = document.getElementById('the-canvas');
    const context = canvas.getContext('2d');
    context.font = '40pt Calibri';
    // context.fillText('My TEXT!', 50, 60);
    const text1 = title;
    const leng = (10.7 * text1.length < 300) ? 300 : 10.7 * text1.length;
    const text2 = 'CV';
    const text3 = 'ĐẾN';
    const text4 = 'Số:  ' + so;
    const text5 = 'Ngày: ' +  ngay;
    context.strokeRect(45, 50, leng, 100);
    context.strokeRect(45, 50, leng, 100);
    context.strokeRect(45, 50, leng, 35);
    context.strokeRect(45, 50, leng, 35);
    context.strokeRect(45, 85, 70, 65);
    context.strokeRect(45, 85, 70, 65);
    context.font = '17px Arial';
    context.fillText(text1, 50, 73);
    context.font = 'bold 27px Arial';
    context.fillText(text2, 60, 110);
    context.font = 'bold 27px Arial';
    context.fillText(text3, 55, 140);
    context.font = '20px Arial';
    context.fillText(text4, 130, 110);
    context.font = '20px Arial';
    context.fillText(text5, 130, 135);
  }
  ngOnInit() {
  }

}
