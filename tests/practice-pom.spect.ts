import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login-page';

test.describe('Suit de pruebas con POM',()=>{

    test.only('Login exitoso con POM', async({page})=>{
        const loginPage = new LoginPage(page);

        test.step('Ir al sitio web',async()=>{
            await loginPage.goTo();
        })

        test.step('Llenar formulario de login', async()=>{
            await loginPage.login('standard_user','secret_sauce');
        })




    })


})