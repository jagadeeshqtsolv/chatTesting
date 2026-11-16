import type { Locator, Page } from '@playwright/test';
import {
  checkWhenVisible,
  clearWhenVisible,
  clickOpensNewPage,
  clickWhenVisible,
  closePage,
  doubleClickWhenVisible,
  expectChecked,
  expectContainsText,
  expectCount,
  expectCountGreaterThan,
  expectDisabled,
  expectEnabled,
  expectFocused,
  expectHidden,
  expectPageTitle,
  expectSelected,
  expectText,
  expectUnchecked,
  expectValue,
  expectVisible,
  fill,
  fillWhenVisible,
  getTextWhenVisible,
  goBack,
  hoverWhenVisible,
  longPressWhenVisible,
  navigateTo,
  scrollIntoView,
  scrollIntoViewWhenVisible,
  selectOptionWhenVisible,
  takeScreenshot,
  typeTextWhenVisible,
  uncheckWhenVisible,
  waitForHidden,
  waitForNewPage,
  waitForVisible,
  waitMs,
  webLocator,
} from "../support/web-actions";

export class JobDetailsPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    jobApplyButton: { strategy: 'testId', value: 'job-apply-button', actionKind: 'button' as const },
    applicationForm: { strategy: 'testId', value: 'application-form', actionKind: 'generic' as const },
    applicantNameInput: { strategy: 'css', value: '#applicant-name', actionKind: 'textbox' as const },
    applicantEmailInput: { strategy: 'css', value: '#applicant-email', actionKind: 'textbox' as const },
    applicantPhoneInput: { strategy: 'css', value: '#applicant-phone', actionKind: 'textbox' as const },
    applicantResumeInput: { strategy: 'css', value: '#applicant-resume', actionKind: 'generic' as const },
    applicantSubmitButton: { strategy: 'css', value: '#applicant-submit', actionKind: 'button' as const },
    applicationConfirmation: { strategy: 'testId', value: 'application-confirmation', actionKind: 'generic' as const }
  } as const;

  async expectJobApplyButtonVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.jobApplyButton);
    await expectVisible(el);
  }

  async clickJobApplyButton() {
    const el = webLocator(this.page, JobDetailsPage.L.jobApplyButton);
    await clickWhenVisible(el);
  }

  async expectApplicationFormVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicationForm);
    await expectVisible(el);
  }

  async expectApplicantNameInputVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantNameInput);
    await expectVisible(el);
  }

  async expectApplicantEmailInputVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantEmailInput);
    await expectVisible(el);
  }

  async expectApplicantPhoneInputVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantPhoneInput);
    await expectVisible(el);
  }

  async expectApplicantResumeInputVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantResumeInput);
    await expectVisible(el);
  }

  async expectApplicantSubmitButtonVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantSubmitButton);
    await expectVisible(el);
  }

  async fillApplicantNameInput(value: string) {
    const el = webLocator(this.page, JobDetailsPage.L.applicantNameInput);
    await fillWhenVisible(el, value);
  }

  async fillApplicantEmailInput(value: string) {
    const el = webLocator(this.page, JobDetailsPage.L.applicantEmailInput);
    await fillWhenVisible(el, value);
  }

  async fillApplicantPhoneInput(value: string) {
    const el = webLocator(this.page, JobDetailsPage.L.applicantPhoneInput);
    await fillWhenVisible(el, value);
  }

  async uploadApplicantResumeInput(filePath: string) {
    const el = webLocator(this.page, JobDetailsPage.L.applicantResumeInput);
    await expectVisible(el);
    await el.setInputFiles(filePath);
  }

  async clickApplicantSubmitButton() {
    const el = webLocator(this.page, JobDetailsPage.L.applicantSubmitButton);
    await clickWhenVisible(el);
  }

  async expectApplicationConfirmationVisible() {
    const el = webLocator(this.page, JobDetailsPage.L.applicationConfirmation);
    await expectVisible(el);
  }

  async expectApplicationConfirmationContainsText(text: string) {
    const el = webLocator(this.page, JobDetailsPage.L.applicationConfirmation);
    await expectContainsText(el, text);
  }

  async doubleClickJobApplyButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, JobDetailsPage.L.jobApplyButton));
  }

  async longPressJobApplyButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, JobDetailsPage.L.jobApplyButton));
  }

  async expectJobApplyButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.jobApplyButton), expected, timeoutMs);
  }

  async expectJobApplyButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.jobApplyButton), substring, timeoutMs);
  }

  async expectJobApplyButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.jobApplyButton), value, timeoutMs);
  }

  async expectJobApplyButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.jobApplyButton), timeoutMs);
  }

  async expectJobApplyButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.jobApplyButton), count, timeoutMs);
  }

  async scrollJobApplyButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.jobApplyButton));
  }

  async clickApplicationForm(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationForm));
  }

  async doubleClickApplicationForm(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationForm));
  }

  async longPressApplicationForm(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationForm));
  }

  async expectApplicationFormHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicationForm), expected, timeoutMs);
  }

  async expectApplicationFormContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicationForm), substring, timeoutMs);
  }

  async expectApplicationFormValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicationForm), value, timeoutMs);
  }

  async expectApplicationFormEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicationForm), timeoutMs);
  }

  async expectApplicationFormCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicationForm), count, timeoutMs);
  }

  async scrollApplicationFormIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationForm));
  }

  async clearApplicantNameInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantNameInput));
  }

  async typeTextApplicantNameInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantNameInput), value);
  }

  async expectApplicantNameInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicantNameInput), expected, timeoutMs);
  }

  async expectApplicantNameInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicantNameInput), substring, timeoutMs);
  }

  async expectApplicantNameInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicantNameInput), value, timeoutMs);
  }

  async expectApplicantNameInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicantNameInput), timeoutMs);
  }

  async expectApplicantNameInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicantNameInput), count, timeoutMs);
  }

  async scrollApplicantNameInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantNameInput));
  }

  async clearApplicantEmailInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantEmailInput));
  }

  async typeTextApplicantEmailInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), value);
  }

  async expectApplicantEmailInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), expected, timeoutMs);
  }

  async expectApplicantEmailInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), substring, timeoutMs);
  }

  async expectApplicantEmailInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), value, timeoutMs);
  }

  async expectApplicantEmailInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), timeoutMs);
  }

  async expectApplicantEmailInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicantEmailInput), count, timeoutMs);
  }

  async scrollApplicantEmailInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantEmailInput));
  }

  async clearApplicantPhoneInput(): Promise<void> {
    await clearWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput));
  }

  async typeTextApplicantPhoneInput(value: string): Promise<void> {
    await typeTextWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), value);
  }

  async expectApplicantPhoneInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), expected, timeoutMs);
  }

  async expectApplicantPhoneInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), substring, timeoutMs);
  }

  async expectApplicantPhoneInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), value, timeoutMs);
  }

  async expectApplicantPhoneInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), timeoutMs);
  }

  async expectApplicantPhoneInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput), count, timeoutMs);
  }

  async scrollApplicantPhoneInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantPhoneInput));
  }

  async clickApplicantResumeInput(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantResumeInput));
  }

  async doubleClickApplicantResumeInput(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantResumeInput));
  }

  async longPressApplicantResumeInput(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantResumeInput));
  }

  async expectApplicantResumeInputHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), expected, timeoutMs);
  }

  async expectApplicantResumeInputContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), substring, timeoutMs);
  }

  async expectApplicantResumeInputValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), value, timeoutMs);
  }

  async expectApplicantResumeInputEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), timeoutMs);
  }

  async expectApplicantResumeInputCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicantResumeInput), count, timeoutMs);
  }

  async scrollApplicantResumeInputIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantResumeInput));
  }

  async doubleClickApplicantSubmitButton(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton));
  }

  async longPressApplicantSubmitButton(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton));
  }

  async expectApplicantSubmitButtonHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), expected, timeoutMs);
  }

  async expectApplicantSubmitButtonContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), substring, timeoutMs);
  }

  async expectApplicantSubmitButtonValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), value, timeoutMs);
  }

  async expectApplicantSubmitButtonEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), timeoutMs);
  }

  async expectApplicantSubmitButtonCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton), count, timeoutMs);
  }

  async scrollApplicantSubmitButtonIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicantSubmitButton));
  }

  async clickApplicationConfirmation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationConfirmation));
  }

  async doubleClickApplicationConfirmation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationConfirmation));
  }

  async longPressApplicationConfirmation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationConfirmation));
  }

  async expectApplicationConfirmationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), expected, timeoutMs);
  }

  async expectApplicationConfirmationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), value, timeoutMs);
  }

  async expectApplicationConfirmationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), timeoutMs);
  }

  async expectApplicationConfirmationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, JobDetailsPage.L.applicationConfirmation), count, timeoutMs);
  }

  async scrollApplicationConfirmationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, JobDetailsPage.L.applicationConfirmation));
  }

}
