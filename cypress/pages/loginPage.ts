class LoginPage{
    selectorsList(){
        const selectors = {
            userNameField: "[name='username']",
            passwordField: "[type='password']",
            loginButon: "[type='submit']",
            topLogo: ".MuiTypography-subtitle1",
            errorMesage: ".SignInForm-alertMessage",
            tutorial: "[data-test='user-onboarding-dialog-title']",
        }
        return selectors
    }
    accessSite(){
        cy.visit('http://localhost:3000/')
    }
    loginWithTest1User(username: string, password: string){
        cy.get(this.selectorsList().userNameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButon).click()
        

    }
    checkAccessInvalid(){
        cy.get(this.selectorsList().errorMesage)

    }
    checkAccessValid(){
        cy.get(this.selectorsList().topLogo).contains("Ted P")
    }
    checkNewUser(){
        cy.get(this.selectorsList().tutorial).contains("Get Started with Real World App")
    }
}

export default LoginPage