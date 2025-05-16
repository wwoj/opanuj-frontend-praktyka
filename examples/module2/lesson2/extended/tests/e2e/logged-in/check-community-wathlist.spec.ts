import { test, expect } from '@playwright/test';
import { MainPage } from '../../../pages/main.page';
import { CommunityPortalPage } from '../../../pages/community-portal.page';
import { HelpDeskPage } from '../../../pages/help-desk.page';

test.beforeEach(async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.navigate();
});

// test.afterEach(async ({ page }) => {
//   const articlePage = new ArticlePage(page);
//   await articlePage.clickTopbarUnwatchButton();

//   await expect(articlePage.getTopbarWatchButton()).toBeVisible();
// });

// test('should open Google homepage', async ({ page }) => {
//   await page.goto('https://www.google.com');
//   await expect(page).toHaveTitle(/Google/);
// });
test('should open Community Portal', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goToCommunityPortal();

  const communityPortalPage = new CommunityPortalPage(page);
  await communityPortalPage.navigateToHelpDesk();
  await expect(page).toHaveTitle(/Help desk/i);

  const helpDeskPage = new HelpDeskPage(page);
  await helpDeskPage.searchFor('watchlist');
  await expect(page).toHaveURL(/Special:Search/i);
});
