import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeLeavePage } from './home-leave.page';

describe('HomeLeavePage', () => {
  let component: HomeLeavePage;
  let fixture: ComponentFixture<HomeLeavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLeavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeLeavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
