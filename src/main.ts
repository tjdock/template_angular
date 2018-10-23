import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// 注释掉 防止 Expression has changed after it was checked
// if (environment.production) {
  enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
