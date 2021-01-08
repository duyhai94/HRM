import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MailHomePage } from './mail-home.page';

describe('MailHomePage', () => {
  let component: MailHomePage;
  let fixture: ComponentFixture<MailHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MailHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
