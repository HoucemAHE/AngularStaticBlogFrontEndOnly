import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVavbarComponent } from './category-vavbar.component';

describe('CategoryVavbarComponent', () => {
  let component: CategoryVavbarComponent;
  let fixture: ComponentFixture<CategoryVavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryVavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryVavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
