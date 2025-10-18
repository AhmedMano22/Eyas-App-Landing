import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawDictionaryComponent } from './law-dictionary.component';

describe('LawDictionaryComponent', () => {
  let component: LawDictionaryComponent;
  let fixture: ComponentFixture<LawDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LawDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
