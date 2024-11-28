import {  Locator, Page } from'@playwright/test';

export class ProductPage{

    readonly page:Page;
    readonly productTitle:Locator;

    constructor(page){
        this.page = page;
        this.productTitle = page.locator("[data-test=\"title\"]");

    }


}