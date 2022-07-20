/// <reference types="cypress" />

import {mainPage} from "../pages/mainPage.js";
import {filterParameters} from "../pages/filterParameters.js"
import { assertion } from "../asertions/assertion.js";
import {searchPage} from "../pages/searchPage"

describe('example to-do app', () => {
  beforeEach(() => {
    mainPage.visit();
  })

  it('Booking', () => {
    
    filterParameters.setCity();
    cy.wait(1000)
    filterParameters.choseCity();
    filterParameters.selectStartDate();
    filterParameters.selectEndDate();
   
    filterParameters.increaseAdults();
    filterParameters.searchResult();
    searchPage.select4StarCheckbox();

    assertion.verifyTheLocations();
    cy.wait(1000)
    assertion.assert4StarsList();
   
    
  })

  
})
