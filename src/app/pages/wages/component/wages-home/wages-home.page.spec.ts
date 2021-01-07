import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WagesHomePage } from './wages-home.page';

describe('WagesHomePage', () => {
  let component: WagesHomePage;
  let fixture: ComponentFixture<WagesHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WagesHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WagesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
