import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivewellComponent } from './livewell.component';

describe('LivewellComponent', () => {
  let component: LivewellComponent;
  let fixture: ComponentFixture<LivewellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivewellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivewellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
