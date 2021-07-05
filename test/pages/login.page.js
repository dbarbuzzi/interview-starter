export function open() {
  return browser.url("https://app.notarize.com/login");
}

const selectors = {
  EmailInput: 'input[name="email"]',
  ContinueButton: 'button[type="submit"]',
  PasswordInput: 'input[name="password"]',
};

/**
 * Locates the specified input field, waits for a user to be able to click into
 * it, then fills it with the supplied value.
 *
 * @param {string} selector selector to target the input field
 * @param {string} value value to be entered into the input field
 * @returns {Promise<any>} the promise returned from element#addValue()
 */
async function fillInputField(selector, value) {
  const field = await $(selector);
  // wait for user to be able to click / bring focus to the input field
  await field.waitForClickable();
  return field.addValue(value);
}

/**
 * Waits for the ‘Continue’ button to be enabled & clickable then clicks it.
 *
 * @returns {Promise<any>} the promise returned from element#click()
 */
async function clickContinue() {
  // same selector works for the button after entering both email then password
  const continueButton = await $(selectors.ContinueButton);
  await continueButton.waitForEnabled();
  await continueButton.waitForClickable();
  return continueButton.click();
}

export async function login() {
  await fillInputField(selectors.EmailInput, "login@email.com");

  await clickContinue();

  await fillInputField(selectors.PasswordInput, "password");

  // await clickContinue();
}
