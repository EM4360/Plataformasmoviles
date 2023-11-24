import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardmascotasPage } from './cardmascotas.page';

describe('CardmascotasPage', () => {
  let component: CardmascotasPage;
  let fixture: ComponentFixture<CardmascotasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CardmascotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
