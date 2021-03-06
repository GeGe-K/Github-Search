import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';
import { RepoComponent } from './repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateCountPipe,
    RepoComponent,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule.forRoot(),
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
