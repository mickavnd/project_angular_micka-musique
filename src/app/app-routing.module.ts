import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { MusicComponent } from './music/music.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'music/:musicId', component: MusicComponent },
  { path: 'search', component: SearchComponent },
  { path: '', redirectTo: 'search', pathMatch: 'full' }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
