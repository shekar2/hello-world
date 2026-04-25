//import { After, AfterAll, Before, BeforeAll, context } from "@cucumber/cucumber";
import { custombrowsers } from "./world";
import { Browser, chromium } from "@playwright/test";
import { BeforeAll,Before, After, AfterAll } from "@cucumber/cucumber";

let browser: Browser

BeforeAll(async() =>{
    browser = await chromium.launch({headless:false});
});

Before(async function (this:custombrowsers) {
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    
});

After(async function (this:custombrowsers) {
    await this.page.close();
    await this.context.close()
   
})
AfterAll(async function () {
    await browser.close();
    
});



 // call the browser "Browser is coming from playwright"
// BeforeAll(async () => {
//     browser = await chromium.launch({headless:false});

// });
// Before(async function (this:custombrowsers) { 

//     this.context = await browser.newContext(); //
//     this.page = await this.context.newPage() 
  
// })

// After(async function (this:custombrowsers) {
//     await this.page.close();
//      await this.context.close();


// })
// AfterAll(async function (){
//     await browser.close();
// });