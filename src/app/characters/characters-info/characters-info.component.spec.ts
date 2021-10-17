import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersInfoComponent } from './characters-info.component';

describe('CharactersInfoComponent', () => {
  let component: CharactersInfoComponent;
  let fixture: ComponentFixture<CharactersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
