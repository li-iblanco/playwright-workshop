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

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
      }

    async login(usuario:string, password:string){
        await this.usernameInput.click();
        await this.usernameInput.fill(usuario);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    };





}