import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEyasPeopleComponent } from './download-eyas-people.component';

describe('DownloadEyasPeopleComponent', () => {
  let component: DownloadEyasPeopleComponent;
  let fixture: ComponentFixture<DownloadEyasPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEyasPeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadEyasPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
