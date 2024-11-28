import {  Locator, Page } from'@playwright/test';


export class LoginPage{

    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');

    }


    async goTo(){
       await this.page.goto('https://www.saucedemo.com/');
    }

    async login(usuario:string, password:string){
        this.usernameInput.click();
        this.usernameInput.fill(usuario);
        this.passwordInput.click();
        this.passwordInput.fill(password);
        this.loginButton.click();
    };





}