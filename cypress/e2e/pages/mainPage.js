
 class MainPage {
    visit() {
        cy.visit("https://www.booking.com/");
    }
}

export const mainPage = new MainPage();
