import LoginPage from '../pages/loginPage'

const loginpage = new LoginPage()

class NewUserPage{
    selectorsList(){
        const selectors = {
            criarNovoUsuario: "[data-test='signup']",
            novoNomeI: "[name='firstName']",
            novoNomeF: "[name='lastName']",
            novoNickName: "[name='username']",
            novoSenha: "[name='password']",
            novoSenhaConf: "[name='confirmPassword']",
            confNovoUsuaButton: "[type='submit']",
            checkNovoUsuario: "[data-test='sidenav-user-full-name']",
            newUserTutorial1: "[data-test='user-onboarding-next']",
            newUserBankName: "[name='bankName']",
            newUserRoutingNumber: "[name='routingNumber']",
            newUserAcountNumber: "[name='accountNumber']",
            tutorialFinish: "[data-test='user-onboarding-dialog-title']",
            newBankSubmit: ".BankAccountForm-submit",
            
            errorMessageName: "#firstName-helper-text",
            errorMessageLastName: "#lastName-helper-text",
            errorMessageUserName: "#username-helper-text",
            errorMessagePassword: "#password-helper-text",
            errorMessageRepeatPassword: "#confirmPassword-helper-text",
            newUserBlankSpace: ".SignUpForm-form",

        }
        return selectors
    }

    newUserButton(){
        cy.get(this.selectorsList().criarNovoUsuario).click()
    }

    createNewUser(firstName: string, lastName: string, nickName: string, password: string){

        cy.get(this.selectorsList().novoNomeI).type(firstName)
        cy.get(this.selectorsList().novoNomeF).type(lastName)
        cy.get(this.selectorsList().novoNickName).type(nickName)
        cy.get(this.selectorsList().novoSenha).type(password)
        cy.get(this.selectorsList().novoSenhaConf).type(password)
        cy.get(this.selectorsList().confNovoUsuaButton).click()
        
    }

    newUserCheck(){
        cy.get(this.selectorsList().checkNovoUsuario).contains("Norman O")
    }

    newUserTutorial(){
        cy.get(this.selectorsList().newUserTutorial1).click()
        cy.get(this.selectorsList().newUserBankName).type("Bank1")
        cy.get(this.selectorsList().newUserRoutingNumber).type("111111111")
        cy.get(this.selectorsList().newUserAcountNumber).type("123456789")
        cy.get(this.selectorsList().newBankSubmit).click()

    }
    failCreateNewUser(firstName: string){
                //cy.get(this.selectorsList.criarNovoUsuario).click()
        cy.get(this.selectorsList().novoNomeI).type("Norman").clear()
        cy.get(this.selectorsList().novoNomeF).click()
        cy.get(this.selectorsList().novoNickName).click()
        cy.get(this.selectorsList().novoSenha).click()
        cy.get(this.selectorsList().novoSenhaConf).click()
        cy.get(this.selectorsList().newUserBlankSpace).click()

        cy.get(this.selectorsList().errorMessageName).contains("First Name is required")
        cy.get(this.selectorsList().errorMessageLastName).contains("Last Name is required")
        cy.get(this.selectorsList().errorMessageUserName).contains("Username is required")
        cy.get(this.selectorsList().errorMessagePassword).contains("Enter your password")
        cy.get(this.selectorsList().errorMessageRepeatPassword).contains("Confirm your password")
    }

}

export default NewUserPage