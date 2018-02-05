import { ShivaniprojectPage } from './app.po';

describe('shivaniproject App', function() {
  let page: ShivaniprojectPage;

  beforeEach(() => {
    page = new ShivaniprojectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
