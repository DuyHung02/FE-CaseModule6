import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayForSingerComponent } from './play-for-singer.component';

describe('PlayForSingerComponent', () => {
  let component: PlayForSingerComponent;
  let fixture: ComponentFixture<PlayForSingerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayForSingerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayForSingerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
