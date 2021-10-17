import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersRouterComponent } from './characters-router.component';

describe('CharactersRouterComponent', () => {
  let component: CharactersRouterComponent;
  let fixture: ComponentFixture<CharactersRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
