import { ComponentsStartPage } from './app.po';

describe('components-start App', () => {
  let page: ComponentsStartPage;

  beforeEach(() => {
    page = new ComponentsStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
