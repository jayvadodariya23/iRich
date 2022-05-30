import { Component, Input, OnInit } from '@angular/core';
import { DocumentHome } from 'src/app/modals/document';
import { getDocumentResponse } from 'src/app/modals/documents';
import { BlogService } from 'src/app/services/blog.service';
import { PDFService } from 'src/app/services/pdf.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.css']
})
export class GridGalleryComponent implements OnInit {
  
  @Input() document : DocumentHome[];
  //document: DocumentHome[] = new getDocumentResponse().data;

  constructor(private blogService: BlogService, private pdfServices : PDFService) {
    //console.log(this.document);
    this.document = new getDocumentResponse().data;
  }

  ngOnInit(): void {

    this.blogService.getAllDocuments().then(res => {
      this.document = res.data;
    }).catch(err => {
      this.document = new getDocumentResponse().data;
    });

  }

  downloadMyFile(index: number) {

    this.pdfServices.getPDF(this.document[index].file).subscribe((response) => {
      let file = new Blob([response], { type : 'application/pdf' });
      const fileName = this.document[0].document_name;
      saveAs(file,fileName);
    });

  }

}
