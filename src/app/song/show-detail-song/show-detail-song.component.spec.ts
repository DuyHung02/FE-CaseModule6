import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailSongComponent } from './show-detail-song.component';

describe('ShowDetailSongComponent', () => {
  let component: ShowDetailSongComponent;
  let fixture: ComponentFixture<ShowDetailSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
