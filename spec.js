describe('Suite name', ()=> {
    it('Test case name', ()=> {
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
    
})