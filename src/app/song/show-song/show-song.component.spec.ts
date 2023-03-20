import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSongComponent } from './show-song.component';

describe('ShowSongComponent', () => {
  let component: ShowSongComponent;
  let fixture: ComponentFixture<ShowSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
