import {getElements} from "./getElements"



class FilterParameters{
     
    getCity(){
        let testCity = "Dili";
        getElements.getCity().type(testCity)
        
    }

    choseCity(){
        getElements.choseCity().click()
                 
    }
    
    getDate(){
         getElements.getDate().click();
         getElements.getCheckInDate().click({force: true});
         cy.wait(2000)
         getElements.getCheckoutDate().click({force: true})
        
    }
   
    increaseAdults(){
        getElements.getAdults().click()
        
        for ( let n = 0; n<5; n++ ){
            getElements.increaseAdults().click();

        }

    }
     
    searchResult() {
        getElements.searchResult();

    } 

    filterByStar(){
        getElements.getFilterfourStarCheckbox().click({ force: true });
    }
}


export const filterParameters = new FilterParameters();