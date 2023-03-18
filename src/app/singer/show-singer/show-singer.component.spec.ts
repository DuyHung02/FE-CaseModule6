import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSingerComponent } from './show-singer.component';

describe('ShowSingerComponent', () => {
  let component: ShowSingerComponent;
  let fixture: ComponentFixture<ShowSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
