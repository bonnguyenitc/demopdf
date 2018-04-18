import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPdfsComponent} from './list-pdfs/list-pdfs.component';
import {FormAddPdfComponent} from './form-add-pdf/form-add-pdf.component';
import {DetailPdfComponent} from './detail-pdf/detail-pdf.component';

const routes: Routes = [
  { path: '', component: ListPdfsComponent },
  { path: 'pdf/add',  component: FormAddPdfComponent },
  { path: 'pdf/:id', component: DetailPdfComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
