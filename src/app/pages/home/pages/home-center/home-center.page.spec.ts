import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCenterPage } from './home-center.page';

describe('HomeCenterPage', () => {
  let component: HomeCenterPage;
  let fixture: ComponentFixture<HomeCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
