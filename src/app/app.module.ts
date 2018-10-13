import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { TodosModule } from '@todos/todos.module';

import { todosReducer } from '@todos/store/reducers/todos.reducers';
import { TodosEffects } from '@todos/store/effects/todos.effects';

export const metaReducers: MetaReducer<any>[] = [storeFreeze];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TodosModule,
    StoreModule.forRoot({ todos: todosReducer }, { metaReducers }),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
