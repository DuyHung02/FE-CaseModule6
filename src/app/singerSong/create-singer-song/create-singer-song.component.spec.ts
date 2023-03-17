import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSingerSongComponent } from './create-singer-song.component';

describe('CreateSingerSongComponent', () => {
  let component: CreateSingerSongComponent;
  let fixture: ComponentFixture<CreateSingerSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSingerSongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSingerSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
