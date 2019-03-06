import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../../interfaces/document';

@Component({
  selector: 'app-template-document',
  templateUrl: './template-document.component.html',
  styleUrls: ['./template-document.component.scss']
})
export class TemplateDocumentComponent implements OnInit {

  @Input() documentInterface: Document;

  constructor() { }

  ngOnInit() { }

  public downloadDocument() {
    console.log('Request necessary to start downloading the document');
  }

}
