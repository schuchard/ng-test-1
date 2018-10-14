import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { TodosService } from '@todos/services/todos.service';
import { TodosComponent } from './todos.component';
import * as todosReducers from '@todos/store/reducers/todos.reducers';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  const todos = [
    { id: 1, description: 'Todo #1', completed: false },
    { id: 2, description: 'Todo #2', completed: true }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot({
          todos: todosReducers.todosReducer
        })
      ],
      providers: [TodosService],
      declarations: [TodosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const service: TodosService = TestBed.get(TodosService);
    spyOn(service, 'getTodos').and.returnValue(todos);
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
