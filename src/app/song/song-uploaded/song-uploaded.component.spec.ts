import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongUploadedComponent } from './song-uploaded.component';

describe('SongUploadedComponent', () => {
  let component: SongUploadedComponent;
  let fixture: ComponentFixture<SongUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongUploadedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
