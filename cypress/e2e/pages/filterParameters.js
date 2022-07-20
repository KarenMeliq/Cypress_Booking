
import helpers from "../../support/helpers.js";


class FilterParameters{

    getCity(){
        
        return cy.get("#ss")
        
    }
   
    setCity(){
        let testCity = "Dili";
        this.getCity().type(testCity)
        
    }

      
    listCity(){
        return cy.get("[data-i='0']")
    }


    choseCity(){
        this.listCity().click()
                 
    }

    getDataPicker() {
        return cy.get(".b-datepicker");
    }

    
    startData = helpers.generateDatesForBooking(2);
    endDate = helpers.generateDatesForBooking(20);

    selectStartDate() {
        cy.get("[data-date = " + this.startData + "]").click()
    }

    selectEndDate() {
       
        cy.get("[data-date = " + this.endDate + "]").click()
    }

     

    getAdults(){
        return cy.get("[data-adults-count]")
    }


    addAdults(){

        return  cy.get("[aria-label='Increase number of Adults'] > .bui-button__text")
               
     }
 
 
   
    increaseAdults(){
        this.getAdults().click()
        
        for ( let n = 0; n<3; n++ ){
            this.addAdults().click();

        }

    }


    getSearchButton() {
       return cy.get("button[data-sb-id='main']");

    } 

     
    searchResult() {
        this.getSearchButton().click();

    } 

    
          

    }








export const filterParameters = new FilterParameters();