import { ReaderappPage } from './app.po';

describe('readerapp App', () => {
  let page: ReaderappPage;

  beforeEach(() => {
    page = new ReaderappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
