
class GetElements{
     
    getCity(){
        
        return cy.get("#ss")
        
    }
    
    choseCity(){
        return cy.get("[data-i='0']")
    }
   
    getDate(){
        return cy.get("[data-mode='checkin'] .sb-date-field__icon")
        
      
    }

    getCheckInDate(){
       return cy.get("[aria-label='30 July 2022'] > [aria-hidden='true']")

    }

    getCheckoutDate(){
        return cy.get("[data-date='2022-08-15']")

    }



     
    getAdults(){
        return cy.get("[data-adults-count]")
    }

    increaseAdults(){

       return  cy.get("[aria-label='Increase number of Adults'] > .bui-button__text")
              
    }


    
    searchResult() {
        cy.get(".js-sb-submit-text").click()

    } 
   
    getSearchResult(){
        
        return cy.get("span[data-testid='address']")
           
    } 

    getFilterfourStarCheckbox(){
     return cy.get("")
    }

    getStars() {
        return cy.get('[data-testid^="rating-"]');
    }
           
    
 
}
export const getElements = new GetElements();