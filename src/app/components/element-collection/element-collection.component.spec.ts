import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementCollectionComponent } from './element-collection.component';

describe('ElementCollectionComponent', () => {
  let component: ElementCollectionComponent;
  let fixture: ComponentFixture<ElementCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElementCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
