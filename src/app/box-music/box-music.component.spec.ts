import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxMusicComponent } from './box-music.component';

describe('BoxMusicComponent', () => {
  let component: BoxMusicComponent;
  let fixture: ComponentFixture<BoxMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
