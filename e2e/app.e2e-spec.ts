import { MemberSearchPage } from './app.po';

describe('member-search App', function() {
  let page: MemberSearchPage;

  beforeEach(() => {
    page = new MemberSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
