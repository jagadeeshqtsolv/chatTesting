import { test as base, expect } from "@playwright/test";
import { CareersPage } from "../pageobjects/CareersPage";
import { CommonPage } from "../pageobjects/CommonPage";
import { JobDetailsPage } from "../pageobjects/JobDetailsPage";

type AppFixtures = {
  careersPage: CareersPage;
  commonPage: CommonPage;
  jobDetailsPage: JobDetailsPage;
};

export const test = base.extend<AppFixtures>({
  careersPage: async ({ page }, use) => {
    await use(new CareersPage(page));
  },
  commonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  jobDetailsPage: async ({ page }, use) => {
    await use(new JobDetailsPage(page));
  },
});

export { expect };
