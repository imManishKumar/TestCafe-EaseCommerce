import { Selector, expect } from 'testcafe';
import LoginPage from '../pages/loginPage';
import { config } from 'dotenv';
config();   

fixture('Ease Commerce Automation')
    .page('https://easecommerce.in/app/login')

test('Form Validation Test', async t => {
    //perform login
   const loginPage = new LoginPage();
    await loginPage.login(process.env.demo_user, process.env.ec_password);

    //clicks Add Task
    const addTaskBtn = Selector('button').withText('Add Task')
    await t.click(addTaskBtn)

    //entering task name in task form
    const taskNameField = Selector("input[placeholder='Select Task Name']")
    let taskName = 'Test Task' + Math.floor(Math.random() * 1000);
    await t.typeText(taskNameField, taskName)

    //entering date in task form
    const dateSelection = Selector("input[placeholder='DD/MM/YYYY']")
    await t
        .typeText(dateSelection, '12/12/2026')

    //entering description in task form
    const descriptionFiled = Selector(".quill p")
    await t.typeText(descriptionFiled, 'test Check')

    //verifying submit button is disabled when mandatory fields are not filled
    const submitBtn = Selector('button').withText('Submit')
    await t.expect(submitBtn.hasAttribute('disabled')).ok("Submit button should be disabled when mandatory fields are not filled")

    await t.wait(5000)
});