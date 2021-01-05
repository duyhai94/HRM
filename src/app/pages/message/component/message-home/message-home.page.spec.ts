import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MessageHomePage } from './message-home.page';

describe('MessageHomePage', () => {
  let component: MessageHomePage;
  let fixture: ComponentFixture<MessageHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
