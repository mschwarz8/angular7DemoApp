import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Document } from '../interfaces/document';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public documentForm: FormGroup;
  public submitted = false;
  public success = false;

  public resultDocumentList: Document[];

  private document: Document;

  constructor(private formBuilder: FormBuilder, private data: DataService) {
    this.document = {
      id: 1,
      firstName: undefined,
      lastName: undefined,
      openClaim: true,
      url: undefined
    };

    this.documentForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.documentForm.invalid) {
      return;
    }
    console.log('Sending search request with JSON: ' + JSON.stringify(this.document));

    this.resultDocumentList = this.data.getDocuments().documents;
    /* Used for asnyc call
    this.data.getDocuments().subscribe(data => {
      this.resultDocumentList = data.documents;
    });
    */

    console.log('Search succeeded!');
    this.success = true;
  }

  ngOnInit() {
  }

  updateDocument(): void {
    this.document = {
      id: this.document.id,
      firstName: this.documentForm.get('firstName').value,
      lastName: this.documentForm.get('lastName').value,
      openClaim: this.document.openClaim,
      url: this.document.url
    };
    console.log('Document updated after blur to ' + JSON.stringify(this.document));
  }

  inputFieldChanges() {
    this.submitted = false;
  }

}
