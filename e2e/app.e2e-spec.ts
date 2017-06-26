import { PadelGPPage } from './app.po';

describe('padel-gp App', function() {
  let page: PadelGPPage;

  beforeEach(() => {
    page = new PadelGPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('msm works!');
  });
});
