// import { setWorldConstructor, World } from "@cucumber/cucumber";
// import { Browser, BrowserContext, Page } from "@playwright/test";

import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";



// export class custombrowsers extends World {
//     page!: Page; // creating variable 
//     context!: BrowserContext;  //context is type of browser context 
//     browser!: Browser; 

// }
// setWorldConstructor(custombrowsers)




export class custombrowsers extends World {
    page!: Page; // this for the page it gives all the methods
    context!: BrowserContext; // use for new window
    browser!: Browser // browser/ chrome, firefox 

}

setWorldConstructor(custombrowsers)