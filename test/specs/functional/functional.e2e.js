import LandingPage from '../../../test/pageobjects/landing.page.js'
import { acceptCookies } from '../../../utils/utilityFunctions.js'

describe('Volvo Cars Landing page - A million miles more', () => {
    afterEach(async () => {
        await browser.deleteCookies();
        console.log("cookies deleted");
      });

     it('accept cookies ', async () => {
        LandingPage.open();
        await acceptCookies();
        
        await expect($('#onetrust-accept-btn-handler')).not.toBeDisabled();
    })

    it('Verifies the title of the page ', async () => {
        LandingPage.open();
        
        await expect(browser).toHaveTitle(
            'A million more | Volvo Cars - International');
             
    }) 

   /* it('Verifies that X90 page is open and the Page title is correct ', async () => {
        LandingPage.open();
        await acceptCookies();

        await $('[data-autoid="productListCarousel:title"]').scrollIntoView();
        
        const carouselList = await $('#ProductListCarousel-1'); 
        await expect(carouselList.toExist);
        await expect(carouselList).toBeDisplayed();
        const carousel90 = await $('//*[@id="ProductListCarousel-1"]/section/div/div[2]/div/div/div/div[1]/div/div/div/div/div[1]/div/a/div[2]/picture')
        //await expect(carousel90).toHaveText('XC90 Recharge');
        carousel90.click();
        //await expect(browser).toHaveTitle(
          //  'XC90 Recharge - Overview | Volvo Cars - International');             
    })*/
})


