import { FormsStartPage } from './app.po';

describe('forms-start App', () => {
  let page: FormsStartPage;

  beforeEach(() => {
    page = new FormsStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
