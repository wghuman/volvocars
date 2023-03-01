import LandingPage from '../../../test/pageobjects/landing.page.js'
import { acceptCookies } from '../../../utils/utilityFunctions.js'

describe('Volvo Cars Landing page - A million miles more', () => {
    
    beforeEach(async () => {
        await LandingPage.open();
        await acceptCookies();
      });

    afterEach(async () => {
        await browser.deleteCookies();
        console.log("cookies deleted");
      });
     
    it('Verifies that the playbutton on the main video disappears when pause is pressed and vice versa ', async () => {
        
        const pauseButton = LandingPage.pauseButton;
        const playButton = LandingPage.playButton;       
        
        await pauseButton.click();

        await expect(playButton).toBeDisplayedInViewport();

        await playButton.click();
        await expect(pauseButton).toBeDisplayedInViewport();
    }) 

  })