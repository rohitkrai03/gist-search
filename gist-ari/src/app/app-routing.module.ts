import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ShowReposComponent } from './show-repos/show-repos.component';
import { ShowGistComponent } from './show-gist/show-gist.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'profile', component: ShowProfileComponent },
  { path: 'repos', component: ShowReposComponent },
  { path: 'gists', component: ShowGistComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
