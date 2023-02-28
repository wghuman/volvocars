import { config } from "./wdio.conf.js";
import { join } from 'path'
//const { join } = require('path');

config.hostname = 'localhost';
config.port = 4444;
config.services = [
  [
    'image-comparison',
    {
      baselineFolder: join(process.cwd(), './test/imagecomparison/baseline/'),
      formatImageName: '{tag}-{logName}-{width}x{height}',
      screenshotPath: join(process.cwd(), './test/imagecomparison/screenshots/'),
      savePerInstance: true,
      autoSaveBaseline: true,
      blockOutStatusBar: true,
      blockOutToolBar: true,
      tabbableOptions: {
        circle: {
          size: 18,
          fontSize: 18,
        },
        line: {
          color: '#ff221a',
          width: 3,
        },
      },
    },
  ],
];

config.specs = ['./test/specs/imagecomparison/imagecomparison.e2e.js'];

config.capabilities = [
  {
     browserName: 'chrome',
     maxInstances: 2,
    'goog:chromeOptions': {
      args: ['--incognito',  'disable-gpu'],
    },
    acceptInsecureCerts: true,
  },
  {
    browserName: 'firefox',
    maxInstances: 2,
    acceptInsecureCerts: true,
  },
   
];

export { config };