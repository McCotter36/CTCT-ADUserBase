import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileComponent } from "./profile/profile.component";

import {
  MsalModule,
  MsalRedirectComponent,
  MsalGuard,
  MsalInterceptor
} from "@azure/msal-angular"; // MsalGuard added to imports
import {
  PublicClientApplication,
  InteractionType,
} from "@azure/msal-browser"; // InteractionType added to imports
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

@NgModule({
  declarations: [AppComponent, ProfileComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MsalModule.forRoot(
      new PublicClientApplication({
        auth: {
          clientId: "bf32f236-3666-4be0-9f05-83a5803307ad",
          authority:
            "https://login.microsoftonline.com/2f16a741-bc3a-42ec-831e-fda5267388cf",
          redirectUri: "http://localhost:4200",
        },
        cache: {
          cacheLocation: "localStorage",
          storeAuthStateInCookie: isIE,
        },
      }),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ["user.read"],
        },
      },
      {
        interactionType: InteractionType.Redirect, // MSAL Interceptor Configuration
        protectedResourceMap: new Map([
          ["https://graph.microsoft.com/v1.0/me", ["user.read"]]
        ])
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    MsalGuard,
    HttpClient
  ],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}