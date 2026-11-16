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

export class CommonPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    careersNavLink: { strategy: 'css', value: 'a[href="/careers"]', actionKind: 'link' as const }
  } as const;

  async clickCareersNavLink() {
    const el = webLocator(this.page, CommonPage.L.careersNavLink);
    await clickWhenVisible(el);
  }

  async doubleClickCareersNavLink(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CommonPage.L.careersNavLink));
  }

  async longPressCareersNavLink(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CommonPage.L.careersNavLink));
  }

  async expectCareersNavLinkVisible(timeoutMs = 30_000): Promise<void> {
    await expectVisible(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CommonPage.L.careersNavLink), expected, timeoutMs);
  }

  async expectCareersNavLinkContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CommonPage.L.careersNavLink), substring, timeoutMs);
  }

  async expectCareersNavLinkValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CommonPage.L.careersNavLink), value, timeoutMs);
  }

  async expectCareersNavLinkEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CommonPage.L.careersNavLink), timeoutMs);
  }

  async expectCareersNavLinkCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CommonPage.L.careersNavLink), count, timeoutMs);
  }

  async scrollCareersNavLinkIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CommonPage.L.careersNavLink));
  }

}
