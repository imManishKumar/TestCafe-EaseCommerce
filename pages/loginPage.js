import { Selector,expect,t} from "testcafe";

export default class LoginPage{
    constructor(){
        this.usernameInput = Selector('#login-form-username');
        this.passwordInput = Selector('#login-form-password');
        this.loginButton = Selector("button[data-test='login-submit-button']");
        this.notificationBtn = Selector("button[aria-label='notifications']");
    }

    async login(username, password){
        await t.typeText(this.usernameInput, username)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
        await t.expect(this.notificationBtn.visible).ok("Login failed");
    }
}