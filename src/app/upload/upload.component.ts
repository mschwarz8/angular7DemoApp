import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  documentForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.documentForm = formBuilder.group({
      fileName: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.documentForm.invalid) {
      return;
    }
    this.success = true;
  }

  ngOnInit() {
  }

}
