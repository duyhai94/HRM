import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WagesPage } from './wages.page';

describe('WagesPage', () => {
  let component: WagesPage;
  let fixture: ComponentFixture<WagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
