import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFisherComponent } from './choose-fisher.component';

describe('ChooseFisherComponent', () => {
  let component: ChooseFisherComponent;
  let fixture: ComponentFixture<ChooseFisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
