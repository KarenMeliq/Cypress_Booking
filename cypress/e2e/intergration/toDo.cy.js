/// <reference types="cypress" />

import {mainPage} from "../pages/mainPage.js";
import {filterParameters} from "../pages/filterParameters.js"
import { assertion } from "../asertions/assertion.js";

describe('example to-do app', () => {
  beforeEach(() => {
    mainPage.visit();
  })

  it('Booking', () => {
    
    filterParameters.getCity();
    cy.wait(1000)
    filterParameters.choseCity();
    filterParameters.getDate();
    filterParameters.increaseAdults();
    filterParameters.searchResult();
    
    assertion.verifyTheLocations();
    cy.wait(1000)
    filterParameters.filterByStar();
   // assertion.verifyTheStars();
   // filterParameters.filterByStar();
    
  })

  
})
