import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodoFormComponent } from './create-todo-form.component';

describe('CreateTodoFormComponent', () => {
  let component: CreateTodoFormComponent;
  let fixture: ComponentFixture<CreateTodoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodoFormComponent]
    });
    fixture = TestBed.createComponent(CreateTodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
