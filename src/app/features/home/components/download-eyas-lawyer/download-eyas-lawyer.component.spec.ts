import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadEyasLawyerComponent } from './download-eyas-lawyer.component';

describe('DownloadEyasLawyerComponent', () => {
  let component: DownloadEyasLawyerComponent;
  let fixture: ComponentFixture<DownloadEyasLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadEyasLawyerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadEyasLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
