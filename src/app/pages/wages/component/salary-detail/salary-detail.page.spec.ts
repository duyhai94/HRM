import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalaryDetailPage } from './salary-detail.page';

describe('SalaryDetailPage', () => {
  let component: SalaryDetailPage;
  let fixture: ComponentFixture<SalaryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalaryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
