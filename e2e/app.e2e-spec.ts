import { Angular2NgCribs2Page } from './app.po';

describe('angular2-ng-cribs2 App', () => {
  let page: Angular2NgCribs2Page;

  beforeEach(() => {
    page = new Angular2NgCribs2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
