import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormpublicarPage } from './formpublicar.page';

describe('FormpublicarPage', () => {
  let component: FormpublicarPage;
  let fixture: ComponentFixture<FormpublicarPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormpublicarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
