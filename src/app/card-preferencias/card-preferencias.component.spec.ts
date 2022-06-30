import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPreferenciasComponent } from './card-preferencias.component';

describe('CardPreferenciasComponent', () => {
  let component: CardPreferenciasComponent;
  let fixture: ComponentFixture<CardPreferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPreferenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPreferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
