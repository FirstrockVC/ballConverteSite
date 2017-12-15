import { BallConverteSitePage } from './app.po';

describe('ball-converte-site App', () => {
  let page: BallConverteSitePage;

  beforeEach(() => {
    page = new BallConverteSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
