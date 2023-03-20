import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailSong2Component } from './show-detail-song2.component';

describe('ShowDetailSong2Component', () => {
  let component: ShowDetailSong2Component;
  let fixture: ComponentFixture<ShowDetailSong2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailSong2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailSong2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
