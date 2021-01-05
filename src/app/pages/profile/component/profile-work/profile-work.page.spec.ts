import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileWorkPage } from './profile-work.page';

describe('ProfileWorkPage', () => {
  let component: ProfileWorkPage;
  let fixture: ComponentFixture<ProfileWorkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileWorkPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileWorkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
