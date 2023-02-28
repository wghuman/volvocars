export const acceptCookies = async () => {
    const btnCookie = await $('#onetrust-accept-btn-handler');
    await btnCookie.click();
    await expect(btnCookie).not.toBeDisplayed();
}