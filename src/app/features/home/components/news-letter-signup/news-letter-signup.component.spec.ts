import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLetterSignupComponent } from './news-letter-signup.component';

describe('NewsLetterSignupComponent', () => {
  let component: NewsLetterSignupComponent;
  let fixture: ComponentFixture<NewsLetterSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsLetterSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsLetterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
