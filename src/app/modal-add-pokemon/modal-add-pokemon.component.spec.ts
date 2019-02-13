import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddPokemonComponent } from './modal-add-pokemon.component';

describe('ModalAddPokemonComponent', () => {
  let component: ModalAddPokemonComponent;
  let fixture: ComponentFixture<ModalAddPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAddPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
