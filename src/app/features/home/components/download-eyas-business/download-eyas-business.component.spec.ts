import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEyasBusinessComponent } from './download-eyas-business.component';

describe('DownloadEyasBusinessComponent', () => {
  let component: DownloadEyasBusinessComponent;
  let fixture: ComponentFixture<DownloadEyasBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEyasBusinessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadEyasBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
