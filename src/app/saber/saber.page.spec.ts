import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaberPage } from './saber.page';

describe('SaberPage', () => {
  let component: SaberPage;
  let fixture: ComponentFixture<SaberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
