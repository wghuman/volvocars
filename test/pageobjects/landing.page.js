import Page from './basePage.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    // for scalability and maintainance purpose, it would be benificial to have get and set methods for locators but for now, I am using the locators within the methods
        //#region Locators

        get cookiesPopup () {
            return $('#onetrust-accept-btn-handler');
        }
        
        
        
        //#endregion Locators
    
    
        acceptCookies(locator) {
            
            locator.click();
        }
    
    open () {
        return super.open('/intl/v/car-safety/a-million-more');
    }
}

export default new LandingPage();
