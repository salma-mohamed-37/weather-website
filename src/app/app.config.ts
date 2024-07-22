import { ApplicationConfig} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimations } from '@angular/platform-browser/animations'
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


export const appConfig: ApplicationConfig = {
  providers:
  [ provideRouter(routes),
    provideHttpClient( withFetch()),
    provideAnimations(),
    DialogModule,
    ToastModule,
    MessageService
  ],

};
