import type { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class CommunityPortalPage {
  private readonly page: Page;
  private readonly url = URLs.COMMUNITY_PORTAL_PAGE;
  private readonly navigation: Locator;
  private readonly articleList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navigation = page.getByRole('navigation', {
      name: 'Personal tools',
    });

    this.articleList = page.locator('#mw-content-text');
  }

  async navigateToHelpDesk() {
    const linkToHelpDesk = this.page
      .locator('div')
      .filter({ hasText: /^Help desk$/ })
      .getByRole('link');

    const helpDeskHref = (await linkToHelpDesk.getAttribute('href'))!;
    await linkToHelpDesk.click();

    return this.page.waitForURL(`**${helpDeskHref}`);
  }
}
