import { Component, OnInit } from '@angular/core';
import { DocumentHome } from 'src/app/modals/document';
import { getDocumentResponse } from 'src/app/modals/documents';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-grid-gallery',
  templateUrl: './grid-gallery.component.html',
  styleUrls: ['./grid-gallery.component.css']
})
export class GridGalleryComponent implements OnInit {
  document: DocumentHome[] = new getDocumentResponse().data;

  constructor(private blogService: BlogService) {

  }
  //   downloadMyFile(index : number){
  //     const link = document.createElement('a');
  //     link.setAttribute('target', '_blank');
  //     link.setAttribute('href', this.document[index].file);
  //     link.setAttribute('download', this.document[index].document_name);
  //     document.body.appendChild(link);
  //     link.click();
  //     link.remove();
  // }
  downloadMyFile(index: number) {
  
    window.open(this.document[index].file); 
    var a         = document.createElement('a');
    a.href        = this.document[index].file; 
    a.target      = '_blank';
    a.download    = 'bill.pdf';
    document.body.appendChild(a);
    a.click();


  }

  // Start file download.

  ngOnInit(): void {

    this.blogService.getAllDocuments().then(res => {
      this.document = res.data;
    }).catch(err => {
      this.document = new getDocumentResponse().data;
    });

  }

}
