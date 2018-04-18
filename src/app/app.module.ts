import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode } from '@angular/core';


import { AppComponent } from './app.component';
import { ListPdfsComponent } from './list-pdfs/list-pdfs.component';
import { DetailPdfComponent } from './detail-pdf/detail-pdf.component';
import { FormAddPdfComponent } from './form-add-pdf/form-add-pdf.component';
import { AppRoutingModule } from './/app-routing.module';
import {environment} from '../environments/environment';
import {PdfFbService} from './pdf-fb.service';


enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    ListPdfsComponent,
    DetailPdfComponent,
    FormAddPdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    PdfViewerModule,
    HttpClientModule
  ],
  providers: [PdfFbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
