import { config } from "./wdio.conf.js";

    
    config.hostname = 'localhost';
    config.port = 4444;

    config.capabilities = [
        {
           browserName: 'chrome',
           maxInstances: 2,
          'goog:chromeOptions': {
            args: ['--incognito', '--headless', 'disable-gpu'],
          },
          acceptInsecureCerts: true,
        },
        
        
      ];
      
      export { config };