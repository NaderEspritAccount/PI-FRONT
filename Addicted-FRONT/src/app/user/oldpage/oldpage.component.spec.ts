import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldpageComponent } from './oldpage.component';

describe('OldpageComponent', () => {
  let component: OldpageComponent;
  let fixture: ComponentFixture<OldpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldpageComponent]
    });
    fixture = TestBed.createComponent(OldpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
