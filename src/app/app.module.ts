import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './layouts/home/home.component';
import { CreateComponent } from './layouts/create/create.component';
import { TodosComponent } from './components/todos/todos.component';
import { todoReducer } from './store/todo.reducer';
import { TodoEffects } from './store/todo.effects';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { FilterByStatePipe } from './pipes/filter-by-state.pipe';
import { GridModule } from '@progress/kendo-angular-grid'
import { KendoGridStateBadgePipe } from './pipes/kendo-grid-state-badge.pipe';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { CreateTodoFormComponent } from './components/create-todo-form/create-todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { EditTodoFormComponent } from './components/edit-todo-form/edit-todo-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateComponent,
    TodosComponent,
    FilterByStatePipe,
    KendoGridStateBadgePipe,
    TodoCardComponent,
    CreateTodoFormComponent,
    EditTodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}, {}),
    EffectsModule.forRoot([TodoEffects]),
    ButtonsModule,
    BrowserAnimationsModule,
    DropDownsModule,
    HttpClientModule,
    NavigationModule,
    GridModule,
    LayoutModule,
    InputsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
