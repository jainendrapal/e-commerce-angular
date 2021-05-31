import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';
import { By } from '@angular/platform-browser';
describe('CalculatorComponent', () => {
  let input1;
  let input2;
  let result;
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => { 
    
});
  it('should create', () => {
    expect(component).toBeTruthy();
  });

    
});
