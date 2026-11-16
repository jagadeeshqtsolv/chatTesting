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

export class CareersPage {
  constructor(private readonly page: Page) {}

  private static readonly L = {
    heading: { strategy: 'css', value: 'h1', actionKind: 'generic' as const },
    jobCard: { strategy: 'testId', value: 'job-card', actionKind: 'generic' as const },
    firstJobTitle: { strategy: 'css', value: "[data-testid='job-card']:first-child [data-testid='job-title']", actionKind: 'link' as const },
    firstJobLocation: { strategy: 'css', value: "[data-testid='job-card']:first-child [data-testid='job-location']", actionKind: 'generic' as const },
    firstJobDescription: { strategy: 'css', value: "[data-testid='job-card']:first-child [data-testid='job-description']", actionKind: 'generic' as const }
  } as const;

  async expectHeadingVisible() {
    const el = webLocator(this.page, CareersPage.L.heading);
    await expectVisible(el);
  }

  async expectHeadingContainsText(text: string) {
    const el = webLocator(this.page, CareersPage.L.heading);
    await expectContainsText(el, text);
  }

  async expectJobCardVisible() {
    const el = webLocator(this.page, CareersPage.L.jobCard);
    await expectVisible(el);
  }

  async expectJobCardCountGreaterThan(n: number) {
    const el = webLocator(this.page, CareersPage.L.jobCard);
    await expectCountGreaterThan(el, n);
  }

  async expectFirstJobTitleVisible() {
    const el = webLocator(this.page, CareersPage.L.firstJobTitle);
    await expectVisible(el);
  }

  async expectFirstJobLocationVisible() {
    const el = webLocator(this.page, CareersPage.L.firstJobLocation);
    await expectVisible(el);
  }

  async expectFirstJobDescriptionVisible() {
    const el = webLocator(this.page, CareersPage.L.firstJobDescription);
    await expectVisible(el);
  }

  async clickFirstJobTitle() {
    const el = webLocator(this.page, CareersPage.L.firstJobTitle);
    await clickWhenVisible(el);
  }

  async clickHeading(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CareersPage.L.heading));
  }

  async doubleClickHeading(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CareersPage.L.heading));
  }

  async longPressHeading(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CareersPage.L.heading));
  }

  async expectHeadingHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CareersPage.L.heading), expected, timeoutMs);
  }

  async expectHeadingValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CareersPage.L.heading), value, timeoutMs);
  }

  async expectHeadingEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CareersPage.L.heading), timeoutMs);
  }

  async expectHeadingCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CareersPage.L.heading), count, timeoutMs);
  }

  async scrollHeadingIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CareersPage.L.heading));
  }

  async clickJobCard(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CareersPage.L.jobCard));
  }

  async doubleClickJobCard(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CareersPage.L.jobCard));
  }

  async longPressJobCard(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CareersPage.L.jobCard));
  }

  async expectJobCardHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CareersPage.L.jobCard), expected, timeoutMs);
  }

  async expectJobCardContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CareersPage.L.jobCard), substring, timeoutMs);
  }

  async expectJobCardValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CareersPage.L.jobCard), value, timeoutMs);
  }

  async expectJobCardEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CareersPage.L.jobCard), timeoutMs);
  }

  async expectJobCardCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CareersPage.L.jobCard), count, timeoutMs);
  }

  async scrollJobCardIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CareersPage.L.jobCard));
  }

  async doubleClickFirstJobTitle(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CareersPage.L.firstJobTitle));
  }

  async longPressFirstJobTitle(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CareersPage.L.firstJobTitle));
  }

  async expectFirstJobTitleHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CareersPage.L.firstJobTitle), expected, timeoutMs);
  }

  async expectFirstJobTitleContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CareersPage.L.firstJobTitle), substring, timeoutMs);
  }

  async expectFirstJobTitleValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CareersPage.L.firstJobTitle), value, timeoutMs);
  }

  async expectFirstJobTitleEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CareersPage.L.firstJobTitle), timeoutMs);
  }

  async expectFirstJobTitleCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CareersPage.L.firstJobTitle), count, timeoutMs);
  }

  async scrollFirstJobTitleIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CareersPage.L.firstJobTitle));
  }

  async clickFirstJobLocation(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CareersPage.L.firstJobLocation));
  }

  async doubleClickFirstJobLocation(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CareersPage.L.firstJobLocation));
  }

  async longPressFirstJobLocation(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CareersPage.L.firstJobLocation));
  }

  async expectFirstJobLocationHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CareersPage.L.firstJobLocation), expected, timeoutMs);
  }

  async expectFirstJobLocationContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CareersPage.L.firstJobLocation), substring, timeoutMs);
  }

  async expectFirstJobLocationValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CareersPage.L.firstJobLocation), value, timeoutMs);
  }

  async expectFirstJobLocationEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CareersPage.L.firstJobLocation), timeoutMs);
  }

  async expectFirstJobLocationCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CareersPage.L.firstJobLocation), count, timeoutMs);
  }

  async scrollFirstJobLocationIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CareersPage.L.firstJobLocation));
  }

  async clickFirstJobDescription(): Promise<void> {
    await clickWhenVisible(webLocator(this.page, CareersPage.L.firstJobDescription));
  }

  async doubleClickFirstJobDescription(): Promise<void> {
    await doubleClickWhenVisible(webLocator(this.page, CareersPage.L.firstJobDescription));
  }

  async longPressFirstJobDescription(): Promise<void> {
    await longPressWhenVisible(webLocator(this.page, CareersPage.L.firstJobDescription));
  }

  async expectFirstJobDescriptionHidden(timeoutMs = 30_000): Promise<void> {
    await expectHidden(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionText(expected: string, timeoutMs = 30_000): Promise<void> {
    await expectText(webLocator(this.page, CareersPage.L.firstJobDescription), expected, timeoutMs);
  }

  async expectFirstJobDescriptionContainsText(substring: string, timeoutMs = 30_000): Promise<void> {
    await expectContainsText(webLocator(this.page, CareersPage.L.firstJobDescription), substring, timeoutMs);
  }

  async expectFirstJobDescriptionValue(value: string, timeoutMs = 30_000): Promise<void> {
    await expectValue(webLocator(this.page, CareersPage.L.firstJobDescription), value, timeoutMs);
  }

  async expectFirstJobDescriptionEnabled(timeoutMs = 30_000): Promise<void> {
    await expectEnabled(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionDisabled(timeoutMs = 30_000): Promise<void> {
    await expectDisabled(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionChecked(timeoutMs = 30_000): Promise<void> {
    await expectChecked(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionUnchecked(timeoutMs = 30_000): Promise<void> {
    await expectUnchecked(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionFocused(timeoutMs = 30_000): Promise<void> {
    await expectFocused(webLocator(this.page, CareersPage.L.firstJobDescription), timeoutMs);
  }

  async expectFirstJobDescriptionCount(count: number, timeoutMs = 30_000): Promise<void> {
    await expectCount(webLocator(this.page, CareersPage.L.firstJobDescription), count, timeoutMs);
  }

  async scrollFirstJobDescriptionIntoView(): Promise<void> {
    await scrollIntoViewWhenVisible(webLocator(this.page, CareersPage.L.firstJobDescription));
  }

}
