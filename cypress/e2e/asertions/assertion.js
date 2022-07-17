import { getElements } from "../pages/getElements";

class Assertion{
    

    verifyTheLocations() {
        const theLocationToBeSearched = "Dilijan"
        getElements.getSearchResult().each(el => {
            let txt = el.text();
            expect(txt).to.contain(theLocationToBeSearched)
        });
    }
    /*
    verifyTheStars() {
        getElements.getStars().each(el => {
            let stars = el.find("span");
            expect(stars).to.have.lengthOf();
        });
    }
*/
}

export const assertion = new Assertion();