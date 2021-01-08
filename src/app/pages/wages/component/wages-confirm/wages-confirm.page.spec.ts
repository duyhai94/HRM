import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WagesConfirmPage } from './wages-confirm.page';

describe('WagesConfirmPage', () => {
  let component: WagesConfirmPage;
  let fixture: ComponentFixture<WagesConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WagesConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
