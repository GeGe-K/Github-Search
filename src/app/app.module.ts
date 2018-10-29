import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { NgProgressModule } from '@ngx-progressbar/core';
// import { NgProgressHttpModule } from '@ngx-progressbar/http';
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
    HttpClientModule,
    // NgProgressModule.forRoot(),
    // NgProgressHttpModule.forRoot()
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
