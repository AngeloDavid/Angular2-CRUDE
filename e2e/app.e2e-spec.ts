import { ExamenPage } from './app.po';

describe('examen App', () => {
  let page: ExamenPage;

  beforeEach(() => {
    page = new ExamenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
