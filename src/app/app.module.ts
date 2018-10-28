import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { SearchService } from './search.service';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    // HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
