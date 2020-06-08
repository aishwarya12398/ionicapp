import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadLocationPage } from './upload-location.page';

describe('UploadLocationPage', () => {
  let component: UploadLocationPage;
  let fixture: ComponentFixture<UploadLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
