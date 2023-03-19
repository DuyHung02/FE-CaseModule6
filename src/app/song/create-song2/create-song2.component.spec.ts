import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSong2Component } from './create-song2.component';

describe('CreateSong2Component', () => {
  let component: CreateSong2Component;
  let fixture: ComponentFixture<CreateSong2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSong2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSong2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
