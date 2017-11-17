import { platformBrowser } from '@angular/platform-browser';
import { ProdConfig } from './blocks/config/prod.config';
import { JhipsterMysqlSampleApplicationAppModuleNgFactory } from '../../../../build/aot/src/main/webapp/app/app.module.ngfactory';

ProdConfig();

platformBrowser().bootstrapModuleFactory(JhipsterMysqlSampleApplicationAppModuleNgFactory)
.then((success) => console.log(`Application started`))
.catch((err) => console.error(err));
