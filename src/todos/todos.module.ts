import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TodosComponent } from '@todos/containers/todos/todos.component';
import { TodosFormComponent } from '@todos/components/todos-form/todos-form.component';
import { TodosListComponent } from '@todos/components/todos-list/todos-list.component';
import { TodosItemComponent } from '@todos/components/todos-item/todos-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    TodosComponent,
    TodosFormComponent,
    TodosListComponent,
    TodosItemComponent
  ],
  providers: [],
  exports: [TodosComponent]
})
export class TodosModule {}
