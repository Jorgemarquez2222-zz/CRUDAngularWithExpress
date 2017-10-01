import { AngularWithExpressPage } from './app.po';

describe('angular-with-express App', () => {
  let page: AngularWithExpressPage;

  beforeEach(() => {
    page = new AngularWithExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
