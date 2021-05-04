import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastformComponent } from './lastform.component';

describe('LastformComponent', () => {
  let component: LastformComponent;
  let fixture: ComponentFixture<LastformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
