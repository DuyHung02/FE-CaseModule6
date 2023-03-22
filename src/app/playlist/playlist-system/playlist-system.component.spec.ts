import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSystemComponent } from './playlist-system.component';

describe('PlaylistSystemComponent', () => {
  let component: PlaylistSystemComponent;
  let fixture: ComponentFixture<PlaylistSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
