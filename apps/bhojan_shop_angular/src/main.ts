import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

createApplication({ providers: appConfig.providers })
  .then(appRef => {
    const injector = appRef.injector;

    // Register the custom element with the selector <my-app>
    const appElement = createCustomElement(AppComponent, { injector });
    customElements.define('my-app', appElement);
  })
  .catch(err => console.error(err));
