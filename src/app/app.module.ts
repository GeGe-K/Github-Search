import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';
import { RepoComponent } from './repo/repo.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateCountPipe,
    RepoComponent
  ],
  imports: [
    BrowserModule,
    // HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
