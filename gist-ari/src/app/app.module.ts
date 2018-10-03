import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ShowGistComponent } from './show-gist/show-gist.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';
import { ShowReposComponent } from './show-repos/show-repos.component';
import { AppRoutingModule } from './app-routing.module';
import { GetUserService } from './get-user.service';
import { DataStoreService } from './data-store.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ShowGistComponent,
    ShowProfileComponent,
    ShowReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GetUserService,
    DataStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
