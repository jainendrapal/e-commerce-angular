import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'angular-unit-test-self'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('angular-unit-test-self');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-unit-test-self!');
//   }));
// });
describe('AppComponent', ()=>{
  
  let expected = '';
  let notExpected = '';
  beforeEach(()=>{
    expected = 'AppComponent';
    notExpected = 'AppComponent123';

  });

  it('checks if AppComponent is AppComponent', ()=> expect('AppComponent').toBe(expected));
  it('checks if AppComponent is not AppComponent', ()=> expect('AppComponent').not.toBe(notExpected));

})