import { Selector } from 'testcafe';
import LoginPage from '../pages/loginPage';
import { config } from 'dotenv';
config();   

fixture('Ease Commerce Automation')
 .page('https://easecommerce.in/app/login')

 test('Task Creation Test', async t => {
    //perform login
    const loginPage = new LoginPage();
    await loginPage.login(process.env.demo_user, process.env.ec_password);

    //clicks Add Task button
    const addTaskBtn = Selector('button').withText('Add Task')
    await t.click(addTaskBtn)

    //entering task name in task form
    const taskNameField = Selector("input[placeholder='Select Task Name']")
    let taskName = 'Test Task' + Math.floor(Math.random() * 1000);
    await t.typeText(taskNameField, taskName)
    
    //selecting assignee in task form
    const selectAssigneeOption = Selector("input[placeholder='Select Assignee']")
    await t.typeText(selectAssigneeOption, 'demouser', { replace: true })
            .pressKey('down')
            .pressKey('enter')

    //clicking proceed button for selected Assignee in task form
    const proceedbtn = Selector('button').withText('Yes, proceed')
    await t.click(proceedbtn)

    //selecting super category in task form
    const superCategoryOption = Selector("input[placeholder='Select Super Category']")
    await t.typeText(superCategoryOption, 'Test Super 15-10-2025', { replace: true })
            .pressKey('down')
            .pressKey('enter')

    //selecting sub category in task form
    const subCategoryOption = Selector("input[placeholder='Select Sub Category']")
    await t
        .typeText(subCategoryOption, 'Test sub category 15-10-2025', { replace: true })
        .pressKey('down')
        .pressKey('enter')   

    //selecting reviewers in task form
     const reviewersOption = Selector("input[placeholder='Select Reviewers']")
    await t
        .typeText(reviewersOption, 'demouser', { replace: true })
        .pressKey('down')
        .pressKey('enter')   

    //selecting priority in task form
    const priorityOption = Selector("input[placeholder='Select Priority']")
    await t
        .typeText(priorityOption, 'Low', { replace: true })
        .pressKey('down')
        .pressKey('enter') 
    
    //entering date in task form
    const dateSelection = Selector("input[placeholder='DD/MM/YYYY']")
    await t
        .typeText(dateSelection, '12/12/2026')

    //entering description in task form
    const descriptionFiled = Selector(".quill p")
    await t.typeText(descriptionFiled, 'test Check')

    //clicking submit button in task form
    const submitBtn = Selector('button').withText('Submit')
    await t.click(submitBtn)

    //clicking create task button in confirmation popup
    const createTaskBtn = Selector('button').withText('Yes, create it!')
    await t.click(createTaskBtn)

    //verifying task card visibility after task creation
    const taskCard = Selector('p').withText(taskName)
    await t.expect(taskCard.visible).ok("Task creation failed")
    
    await t.wait(5000)
});