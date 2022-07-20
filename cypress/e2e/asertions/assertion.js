import { filterParameters } from "../pages/filterParameters";
import constantData from "../../support/constantData";
import {searchPage} from "../pages/searchPage"
class Assertion{
    

    verifyTheLocations() {
        
        searchPage.getSearchResult().each(el => {
            let txt = el.text();
            expect(txt).to.be.oneOf([constantData.expectedLocation,constantData.strangeLocation,
                constantData.strangeLocation1,constantData.trangeLocation2])
        });
    }
    assert4StarsList() {
        searchPage.getStarsResults().each(el => {
            let stars = el.find("span");
            expect(stars).to.have.lengthOf(3);
        });
}

}

export const assertion = new Assertion();