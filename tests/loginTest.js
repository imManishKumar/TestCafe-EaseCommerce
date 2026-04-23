import { Selector } from 'testcafe';
import LoginPage from '../pages/loginPage';
import { config } from 'dotenv';
config();   

fixture('Ease Commerce Automation')
 .page('https://easecommerce.in/app/login')

 test('Login Test', async t => {
   //performs login
    const loginPage = new LoginPage();
    await loginPage.login(process.env.demo_user, process.env.ec_password);
    });



