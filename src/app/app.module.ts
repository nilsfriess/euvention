import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MdListModule, MdToolbarModule, MdTabsModule, MdCheckboxModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';

const appRoutes: Routes = [
  {
    path: 'jobs',
    component: ListComponent
  },
  {
    path: 'overview',
    component: List2Component,
    data: { showDetail: false }
  },
  {
    path: 'overview/detail',
    component: List2Component,
    data: { showDetail: true }
  },
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    List2Component
  ],
  imports: [
    BrowserModule,
    MdListModule,
    MdToolbarModule,
    MdTabsModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    MdCheckboxModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
