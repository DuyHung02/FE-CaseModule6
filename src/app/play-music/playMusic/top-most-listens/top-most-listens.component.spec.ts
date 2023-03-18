import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMostListensComponent } from './top-most-listens.component';

describe('TopMostListensComponent', () => {
  let component: TopMostListensComponent;
  let fixture: ComponentFixture<TopMostListensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopMostListensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMostListensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
