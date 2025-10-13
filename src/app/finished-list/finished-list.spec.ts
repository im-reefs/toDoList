import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishedList } from './finished-list';

describe('FinishedList', () => {
  let component: FinishedList;
  let fixture: ComponentFixture<FinishedList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinishedList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinishedList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
