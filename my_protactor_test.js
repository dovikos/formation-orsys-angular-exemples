describe('Selenium Test Case', function() {
  it('should execute test case without errors', function() {
    var text, value, bool, source, url, title;
    var TestVars = {};
    browser.get("http://localhost:8000/app/25_protractor/app/");
    element(by.xpath("//input")).sendKeys("saloute jeune");
    element(by.xpath("//input")).click();
    element(by.xpath("//input")).sendKeys("saloute  oups");
  });
});
