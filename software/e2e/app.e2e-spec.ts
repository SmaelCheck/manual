import { SoftwarePage } from './app.po';

describe('software App', () => {
  let page: SoftwarePage;

  beforeEach(() => {
    page = new SoftwarePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
