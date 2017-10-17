import { AppPage } from './app.po';

describe('angular-book App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display the banner', () =>
    expect(page.getHeaderText()).toEqual('Angular Tutorial App')
  );

  it('should end up on the list page', () =>
    expect(page.currentUrl).toContain('/list')
  );
});
