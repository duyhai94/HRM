import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WagesPayrollPage } from './wages-payroll.page';

describe('WagesPayrollPage', () => {
  let component: WagesPayrollPage;
  let fixture: ComponentFixture<WagesPayrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesPayrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WagesPayrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
