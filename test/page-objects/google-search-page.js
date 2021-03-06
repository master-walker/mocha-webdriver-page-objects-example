var page = require('./page');
var GoogleResultsPage = require('./google-results-page');

function GoogleSearchPage (webdriver) {
  page.call(this, webdriver, 'http://www.google.co.uk/webhp?complete=0');
}

GoogleSearchPage.prototype = Object.create(page.prototype);
GoogleSearchPage.prototype.constructor = GoogleSearchPage;

GoogleSearchPage.prototype.typeSearchQuery = function(searchQuery) {
  return this.driver.findElement({ name: 'q'  }).sendKeys(searchQuery);
};

GoogleSearchPage.prototype.clickSearchButton = function() {
  this.driver.findElement({ name: 'btnK' }).click();
  this.waitFor({ id: 'resultStats' });
  return new GoogleResultsPage(this.driver);
};

module.exports = GoogleSearchPage;
