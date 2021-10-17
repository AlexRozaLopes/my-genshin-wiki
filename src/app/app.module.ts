import { MaterialModule } from './material/material.module';
import { WeaponsComponent } from './weapons/weapons.component';
import { NationsComponent } from './nations/nations.component';
import { MaterialsComponent } from './materials/materials.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { ElementsComponent } from './elements/elements.component';
import { DomainsComponent } from './domains/domains.component';
import { ConsumablesComponent } from './consumables/consumables.component';
import { ArtifactsComponent } from './artifacts/artifacts.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharactersInfoComponent } from './characters/characters-info/characters-info.component';
import { CharactersDetailsComponent } from './characters/characters-details/characters-details.component';
import { CharactersRouterComponent } from './characters/characters-router/characters-router.component';

const appRoutes: Routes = [
  {path:'characters', component:CharactersRouterComponent, children:[
    {path:'', component:CharactersComponent},
    {path:'details/:name', component:CharactersDetailsComponent}
  ]},
  {path:'artifacts', component:ArtifactsComponent},
  {path:'consumables', component:ConsumablesComponent},
  {path:'domains', component:DomainsComponent},
  {path:'elements', component:ElementsComponent},
  {path:'enemies', component:EnemiesComponent},
  {path:'materials', component:MaterialsComponent},
  {path:'nations', component:NationsComponent},
  {path:'weapons', component:WeaponsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CharactersComponent,
    CharactersInfoComponent,
    CharactersDetailsComponent,
    CharactersRouterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
