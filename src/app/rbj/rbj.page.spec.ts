import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RbjPage } from './rbj.page';

describe('RbjPage', () => {
  let component: RbjPage;
  let fixture: ComponentFixture<RbjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbjPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RbjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
