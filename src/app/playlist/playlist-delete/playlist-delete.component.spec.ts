import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistDeleteComponent } from './playlist-delete.component';

describe('PlaylistDeleteComponent', () => {
  let component: PlaylistDeleteComponent;
  let fixture: ComponentFixture<PlaylistDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
