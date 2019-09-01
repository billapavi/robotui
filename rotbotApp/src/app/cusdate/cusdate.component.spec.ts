import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusdateComponent } from './cusdate.component';

describe('CusdateComponent', () => {
  let component: CusdateComponent;
  let fixture: ComponentFixture<CusdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
