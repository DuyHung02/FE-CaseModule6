import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailSingerComponent } from './show-detail-singer.component';

describe('ShowDetailSingerComponent', () => {
  let component: ShowDetailSingerComponent;
  let fixture: ComponentFixture<ShowDetailSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailSingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
