import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDocumentComponent } from './template-document.component';
import { Document } from '../../interfaces/document';

describe('TemplateDocumentComponent', () => {
  let component: TemplateDocumentComponent;
  let fixture: ComponentFixture<TemplateDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TemplateDocumentComponent,
        Document
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
