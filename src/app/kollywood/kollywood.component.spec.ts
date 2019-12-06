import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KollywoodComponent } from './kollywood.component';

describe('KollywoodComponent', () => {
  let component: KollywoodComponent;
  let fixture: ComponentFixture<KollywoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KollywoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KollywoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
