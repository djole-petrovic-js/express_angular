import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Route } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { IndexComponent } from './components/index/index.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StoriesComponent } from './components/stories/stories.component';
import { GaleriesComponent } from './components/galeries/galeries.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { Browser } from 'protractor';

const routes:Route[] = [{
  path:'',
  component:IndexComponent
},{
  path:'about',
  component:AboutComponent
},{
  path:'contact',
  component:ContactComponent
},{
  path:'galeries/:id',
  component:GaleriesComponent
},{
  path:'stories/:id',
  component:StoriesComponent
},{
  path:'categories/:name',
  component:SearchComponent
},{
  path:'categories/:name/:page',
  component:SearchComponent
},{
  path:'**',
  component:NotFoundComponent
}];

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    SearchComponent,
    NotFoundComponent,
    StoriesComponent,
    GaleriesComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes),
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
