import { test, expect } from '@playwright/test';
import { LoginPage } from '../page/login-page';
import { ProductPage } from '../page/products-page';

test.describe('Suit de pruebas con POM',()=>{

    test.only('Login exitoso con POM', async({page})=>{
        const loginPage = new LoginPage(page);
        const productPage = new ProductPage(page);

        await test.step('Ir al sitio web',async()=>{
            await loginPage.goto();
        })

        await test.step('Llenar formulario de login', async()=>{
            await loginPage.login('standard_user','secret_sauce');
        })

        await test.step('Validacion de login exitoso',async()=>{
            await expect(productPage.productTitle).toBeVisible();
            
        })

    })

})