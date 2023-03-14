import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCreateSongByAccountComponent } from './show-create-song-by-account.component';

describe('ShowCreateSongByAccountComponent', () => {
  let component: ShowCreateSongByAccountComponent;
  let fixture: ComponentFixture<ShowCreateSongByAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCreateSongByAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCreateSongByAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
