import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemoninfoComponent } from './pokemoninfo.component';

describe('PokemoninfoComponent', () => {
  let component: PokemoninfoComponent;
  let fixture: ComponentFixture<PokemoninfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemoninfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemoninfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
