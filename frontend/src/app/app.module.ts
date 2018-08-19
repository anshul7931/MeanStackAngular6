import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';//For routes

//For http client, to be used by service
import { HttpClientModule } from '@angular/common/http';

//Importing components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

//For <mat-toolbar>
import { MatToolbarModule } from '@angular/material' ;

//For service class 
import { IssueService } from './issue.service';



const routes: Routes = [
  { path:'create', component: CreateComponent },
  { path:'edit/:id', component: EditComponent },
  { path:'list', component: ListComponent },
  { path:'', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
