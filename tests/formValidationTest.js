import { Selector,expect } from 'testcafe';
import LoginPage from '../pages/loginPage';
import { config } from 'dotenv';
config();   

fixture('Ease Commerce Automation')
 .page('https://easecommerce.in/app/login')

 test('Form Validation Test - Submit Button', async t => {
    //performs login
    const loginPage = new LoginPage();
    await loginPage.login(process.env.demo_user, process.env.ec_password);

    //clicks Add Task
    const addTaskBtn = Selector('button').withText('Add Task')
    await t.click(addTaskBtn)

    //clicking subbmit without filling mandatory fields
    const submitBtn = Selector('button').withText('Submit')
    await t.click(submitBtn)

    //validating create task button's non existence 
    const createTaskBtn = Selector('button').withText('Yes, create it!')
    await t.expect(createTaskBtn.exists).notOk("Form validation failed: Task was created without filling mandatory fields")

    await t.wait(5000)
});