describe("My APP!", function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  describe('test', function () {
    it('should have a heading', function() {
      expect(element('h1').text()).toEqual('Hej');
    });
  });

  describe('main view', function() {
    it('should list playlists', function() {
      expect(repeater('li').count()).toEqual(2);
    });
  });
});
