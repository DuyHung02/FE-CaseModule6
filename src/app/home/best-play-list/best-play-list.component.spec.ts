import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestPlayListComponent } from './best-play-list.component';

describe('BestPlayListComponent', () => {
  let component: BestPlayListComponent;
  let fixture: ComponentFixture<BestPlayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestPlayListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestPlayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
