import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10ListensComponent } from './top10-listens.component';

describe('Top10ListensComponent', () => {
  let component: Top10ListensComponent;
  let fixture: ComponentFixture<Top10ListensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Top10ListensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Top10ListensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
