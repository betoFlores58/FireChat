import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { ChatService } from './providers/chat.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, LoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [ChatService],
  bootstrap: [AppComponent],
})
export class AppModule {}
