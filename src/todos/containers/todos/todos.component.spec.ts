import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { TodosComponent } from './todos.component';
import { LoadTodos } from '@todos/store/actions/todos.actions';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  const todos = [
    { id: 1, description: 'Todo #1', completed: false },
    { id: 2, description: 'Todo #2', completed: true }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Store,
          useValue: {
            dispatch: jest.fn(),
            pipe: jest.fn(),
            select: jest.fn()
          }
        }
      ],
      declarations: [TodosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit()', () => {
    test('should dispatch LoadTodos', () => {
      const action = new LoadTodos();
      const store = TestBed.get(Store);
      const spy = jest.spyOn(store, 'dispatch');

      fixture.detectChanges();

      expect(spy).toHaveBeenCalledWith(action);
    });
  });
});
