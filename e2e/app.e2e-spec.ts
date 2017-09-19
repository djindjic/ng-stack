import { AppPage } from './app.po';

describe('ng-stack App', () => {
  let mutablePage: AppPage;

  beforeEach(() => {
    mutablePage = new AppPage();
  });

  it('should display welcome message', () => {
    mutablePage.navigateTo();
    expect(mutablePage.getParagraphText()).toEqual('Welcome to app!');
  });
});
