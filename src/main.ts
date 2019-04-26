import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.error(err));

setTimeout(() => {
	console.log('%c Hold up!', 'font-size: 40px; font-weight: bold; color: red; padding: 20px;')
	console.log('%c Pasting the wrong thing in here can give hackers control of your computer.', 'font-size: 25px; font-weight: bold; color: red; padding: 20px;')
	console.log('%c If someone told you to paste something in here, you were probaly scammed.  Unless you know exactly what you are doing just close the console.', 'font-size: 15px; font-weight: bold; color: yellow; padding: 20px;')
}, 5000)