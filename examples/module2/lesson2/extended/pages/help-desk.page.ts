import type { Locator, Page } from '@playwright/test';
import { URLs } from '../utils/constants';

export class HelpDeskPage {
  private readonly page: Page;
  private readonly url = URLs.HELP_DESK_PAGE;
  private readonly searchInput: Locator;
  private readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page
      .locator('td')
      .filter({ hasText: 'Search the frequently asked' })
      .getByRole('textbox');
    this.searchButton = page.getByRole('button', {
      name: 'Search the frequently asked',
    });
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

  async searchFor(term: string) {
    await this.searchInput.fill(term);
    await Promise.all([
      this.page.waitForNavigation(), // wait for navigation triggered by Enter key
      this.searchInput.press('Enter'), // press Enter to start search
    ]);
  }
}
