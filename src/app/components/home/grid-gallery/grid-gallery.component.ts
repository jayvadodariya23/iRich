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
  document :DocumentHome[] = new getDocumentResponse().data; 

  constructor(private blogService : BlogService) {
  
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
downloadMyFile(index : number){
              
                //creating an invisible element
                var element = document.createElement('a');
                element.setAttribute('href', this.document[index].document_name);
                element.setAttribute('download', this.document[index].file);
              
                // Above code is equivalent to
                // <a href="path of file" download="file name">
              
                document.body.appendChild(element);
              
                //onClick property
                element.click();
              
                document.body.removeChild(element);
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
