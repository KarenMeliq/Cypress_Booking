

class SearchPage {

    getSearchResult(){
        
        return cy.get("span[data-testid='address']")
           
    } 

    get4StarCheckBox(){
        return  cy.contains('3 stars')
     }

     select4StarCheckbox(){
        this.get4StarCheckBox().click()
        cy.wait(2000);
    }


    getStarsResults(){
        return cy.get('[data-testid^="rating-"]')
    }
   
 }

 export const searchPage = new SearchPage();