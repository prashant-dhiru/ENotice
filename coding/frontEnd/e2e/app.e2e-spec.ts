import { ENoticePage } from './app.po';

describe('enotice App', () => {
  let page: ENoticePage;

  beforeEach(() => {
    page = new ENoticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('enb works!');
  });
});
