import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSingerNameComponent } from './find-singer-name.component';

describe('FindSingerNameComponent', () => {
  let component: FindSingerNameComponent;
  let fixture: ComponentFixture<FindSingerNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindSingerNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindSingerNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
