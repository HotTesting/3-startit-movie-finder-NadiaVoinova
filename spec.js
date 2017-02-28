describe('MAIN Search', ()=> {
    it('Search1', ()=> {
        //open browser
        browser.get ('https://movies-finder.firebaseapp.com/',20 )
        //search field is ElementFinder
      let searchField = $("input[name='searchStr']")
      let searchRequest = 'The Lord'
      searchField.sendKeys(searchRequest)
      element(by.buttonText('Go!')).click()
      browser.sleep(5000)
      let movieCard =$('movie-card')
      let title = movieCard.$('h4 a').getText()
        expect(title).toContain(searchRequest,('First serch result should contain Serch string'))
    })
    it('Search2', ()=> {
        //open browser
        browser.get ('https://movies-finder.firebaseapp.com/',20 )
        //search field is ElementFinder
      let searchField = $("input[name='searchStr']")
      let searchRequest = 'Назад в будущее'
      searchField.sendKeys(searchRequest)
      element(by.buttonText('Go!')).click()
      browser.sleep(5000)
      let movieCard =$('movie-card')
      let title = movieCard.$('ng-reflect-model').getText()
        expect(title).toContain(searchRequest,('First serch result should contain Serch string'))
    })


/* Пыталась нанисать негативный кейс - не знаю реализовать NotPresent
 it('Search3', ()=> {
        //open browser
        browser.get ('https://movies-finder.firebaseapp.com/',20 )
        //search field is ElementFinder
      let searchField = $("input[name='searchStr']")
      let searchRequest = '1111!!!!22222'
      searchField.sendKeys(searchRequest)
      element(by.buttonText('Go!')).click()

      browser.sleep(5000)

      let movieCard =$('movie-card')
        expect(movieCard).isPresent().isDisplayed().toBeFalsy(),('should be no search results')
    })
*/


    
    
    
})