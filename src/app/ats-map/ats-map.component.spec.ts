import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtsMapComponent } from './ats-map.component';

describe('AtsTemplateComponent', () => {
  let component: AtsMapComponent;
  let fixture: ComponentFixture<AtsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
