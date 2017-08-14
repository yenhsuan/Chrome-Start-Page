import { StartPageAppPage } from './app.po';

describe('start-page-app App', () => {
  let page: StartPageAppPage;

  beforeEach(() => {
    page = new StartPageAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
