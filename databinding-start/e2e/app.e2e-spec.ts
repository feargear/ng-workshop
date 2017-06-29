import { DatabindingStartPage } from './app.po';

describe('databinding-start App', () => {
  let page: DatabindingStartPage;

  beforeEach(() => {
    page = new DatabindingStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
