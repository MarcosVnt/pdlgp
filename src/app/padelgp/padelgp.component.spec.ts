/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PadelgpComponent } from './padelgp.component';

describe('PadelgpComponent', () => {
  let component: PadelgpComponent;
  let fixture: ComponentFixture<PadelgpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadelgpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadelgpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
