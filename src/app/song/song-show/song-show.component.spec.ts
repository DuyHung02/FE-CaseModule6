import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongShowComponent } from './song-show.component';

describe('SongShowComponent', () => {
  let component: SongShowComponent;
  let fixture: ComponentFixture<SongShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
