`yarn install` (requires node v14 or later)  
`yarn test`

## Change(s)

* Updated the `chromedriver` package to match the current version of stable Chrome to address a warning about mismatching versions.
* In `login.spec.js`, change the existing `it` to use async/await as the `open` method is returning a Promise and therefore we should wait for it to resolve.

## Design, Structure, & Organization Notes

* I have not used this structure for the spec files for end-to-end tests so I was unsure the best way to structure it (i.e. should there be a continuation between “it”s in a “describe” or should I have created a new “describe”)
* The general structure for `login.page.js` is similar to what I’ve done in the past - a page object would have properties that were selectors (or actual elements in frameworks where the element locators did not return promises) and helper methods specific to that page.
