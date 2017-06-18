import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAreaComponent } from './member-area.component';

describe('MemberAreaComponent', () => {
  let component: MemberAreaComponent;
  let fixture: ComponentFixture<MemberAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});