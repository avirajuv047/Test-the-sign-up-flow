import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SignupPage from '../pageObjects/signupPage';

const signupPage = new SignupPage();

Given('I am on the signup page', () => {
  signupPage.visit();
});

When('I fill out the signup form with valid details', (dataTable) => {
  const data = dataTable.rowsHash();
  signupPage.fillOutForm(data.email, data.password, data.firstName, data.lastName);
});

When('I submit the form', () => {
  signupPage.submitForm();
});

Then('I should see a success message', () => {
  signupPage.checkSuccessMessage();
});

Then('Logout', () => {
  signupPage.logout();
});

Then('I am on the signin page', () => {
  signupPage.loginUrl();
});

Then('I should be able to sign in with the new account', (dataTable) => {
  const data = dataTable.rowsHash();
  signupPage.login(data.email, data.password);
});
