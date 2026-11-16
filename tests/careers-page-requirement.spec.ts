import { test, expect } from '@support/fixtures';
import env from '@support/env';
import testData from '@testdata/test-data.json';

test.describe('Careers Page - Smoke', () => {
  test('Navigate to Careers via main nav and verify job list with required fields', { tag: ["@smoke","@regression","@P0","@case-b397c6b5-b3c1-47e7-b6e8-50f215205147"] }, async ({ page, commonPage, careersPage }) => {
    await test.step('Open — Open home page', async () => {
      await page.goto('/');
    });

    await test.step('Click — Main navigation: Careers link', async () => {
      await page.goto('/careers');
    });

    await test.step('Assert visible — Careers page heading', async () => {
      await careersPage.expectHeadingVisible();
    });

    await test.step("Assert contains — Heading contains 'Careers'", async () => {
      await careersPage.expectHeadingContainsText('Careers');
    });

    await test.step('Assert count greater than — At least one job card is listed', async () => {
      await careersPage.expectJobCardCountGreaterThan(0);
    });

    await test.step('Assert visible — First job has a clickable title', async () => {
      await careersPage.expectFirstJobTitleVisible();
    });

    await test.step('Assert visible — First job shows location', async () => {
      await careersPage.expectFirstJobLocationVisible();
    });

    await test.step('Assert visible — First job shows brief description', async () => {
      await careersPage.expectFirstJobDescriptionVisible();
    });
  });

  test('Open a job detail and apply successfully via application form', { tag: ["@smoke","@regression","@P0","@case-7e8aaca6-fa7b-4bd7-ae88-8024bb6e1634"] }, async ({ page, commonPage, careersPage, jobDetailsPage }) => {
    await test.step('Open — Open home page', async () => {
      await page.goto('/');
    });

    await test.step('Click — Main navigation: Careers link', async () => {
      await page.goto('/careers');
    });

    await test.step('Assert visible — Job cards list', async () => {
      await careersPage.expectJobCardVisible();
    });

    await test.step('Click — Open first job details via title link', async () => {
      await careersPage.clickFirstJobTitle();
    });

    await test.step('Assert visible — Apply button on job details page', async () => {
      await jobDetailsPage.expectJobApplyButtonVisible();
    });

    await test.step('Assert visible — Apply button is visible', async () => {
      await jobDetailsPage.expectJobApplyButtonVisible();
    });

    await test.step('Click — Click Apply to open application form', async () => {
      await jobDetailsPage.clickJobApplyButton();
    });

    await test.step('Assert visible — Application form container', async () => {
      await jobDetailsPage.expectApplicationFormVisible();
    });

    await test.step('Assert visible — Name field visible', async () => {
      await jobDetailsPage.expectApplicantNameInputVisible();
    });

    await test.step('Assert visible — Email field visible', async () => {
      await jobDetailsPage.expectApplicantEmailInputVisible();
    });

    await test.step('Assert visible — Phone field visible', async () => {
      await jobDetailsPage.expectApplicantPhoneInputVisible();
    });

    await test.step('Assert visible — Resume upload field visible', async () => {
      await jobDetailsPage.expectApplicantResumeInputVisible();
    });

    await test.step('Assert visible — Submit button visible', async () => {
      await jobDetailsPage.expectApplicantSubmitButtonVisible();
    });

    await test.step('Fill — Enter applicant name', async () => {
      await jobDetailsPage.fillApplicantNameInput(testData.openAJobDetailAndApplySuccessfullyViaApplicationForm.enterApplicantName);
    });

    await test.step('Fill — Enter applicant email', async () => {
      await jobDetailsPage.fillApplicantEmailInput(testData.openAJobDetailAndApplySuccessfullyViaApplicationForm.enterApplicantEmail);
    });

    await test.step('Fill — Enter applicant phone', async () => {
      await jobDetailsPage.fillApplicantPhoneInput(testData.openAJobDetailAndApplySuccessfullyViaApplicationForm.enterApplicantPhone);
    });

    await test.step('Fill — Attach resume file', async () => {
      await jobDetailsPage.uploadApplicantResumeInput(testData.openAJobDetailAndApplySuccessfullyViaApplicationForm.attachResumeFile);
    });

    await test.step('Click — Submit application', async () => {
      await jobDetailsPage.clickApplicantSubmitButton();
    });

    await test.step('Assert visible — Submission confirmation message', async () => {
      await jobDetailsPage.expectApplicationConfirmationVisible();
    });

    await test.step('Assert contains — Confirmation message acknowledges submission', async () => {
      await jobDetailsPage.expectApplicationConfirmationContainsText('Thank you');
    });
  });
});
