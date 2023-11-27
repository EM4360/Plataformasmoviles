import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdicionmascotaPage } from './edicionmascota.page';

describe('EdicionmascotaPage', () => {
  let component: EdicionmascotaPage;
  let fixture: ComponentFixture<EdicionmascotaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdicionmascotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
