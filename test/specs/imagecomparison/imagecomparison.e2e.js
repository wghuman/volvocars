import LandingPage from '../../../test/pageobjects/landing.page.js'
import { acceptCookies } from '../../../utils/utilityFunctions.js'

describe('Image comparison basic tests', () => {
    beforeEach(async () => {
        await LandingPage.open();
        //await browser.maximizeWindow();
        await acceptCookies();
      });

      afterEach(async () => {
        await browser.deleteCookies();
        console.log("cookies deleted");
      });

      it('Create a baseline image if its missing', async () => {
        await browser.saveFullPageScreen('fullPage', {hideElements: [await $('#Video-1')],
        });
      });
      
      
      it('Compare the full screen images ', async () => {
        await browser.checkFullPageScreen('fullPage', {
          
          hideElements: [await $('#Video-1')],
        });
      });

      

   
})


