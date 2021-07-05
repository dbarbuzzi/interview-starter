import * as LoginPage from "../pages/login.page";

describe('Notarize Signer Login Page', () => {
  it('should open the login page', async () => {
    await LoginPage.open();
  });
  it('should log into the site', async function () {
    await LoginPage.login();
  });
});
