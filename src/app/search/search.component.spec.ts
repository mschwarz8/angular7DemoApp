import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { TemplateDocumentComponent } from '../template/template-document/template-document.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let dataServiceMock: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {

    dataServiceMock = jasmine.createSpyObj('DataService', ['getDocuments'])
    dataServiceMock.getDocuments.and.returnValue([])

    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [
        SearchComponent,
        TemplateDocumentComponent
      ],
      providers: [
        {
          provide: DataService,
          useValue: dataServiceMock,
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Search Document');
  });
});
