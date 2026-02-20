import UserData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import NewUserPage from '../../pages/newUserPage'


const loginpage = new LoginPage()
const newUserPage = new NewUserPage()

const selectorsList = {
    newUserTuto: "[data-test='user-onboarding-dialog-title']"
}

describe ('Testes do Exercício 1 Criar novo Usuario com sucesso e falha', () => {
    it('Tentar criar novo usuário e falhar', () =>{

        loginpage.accessSite()
        newUserPage.newUserButton()
        newUserPage.failCreateNewUser("Norman")
    })

    it( 'Criar novo usuário', () => {
        loginpage.accessSite()
        newUserPage.newUserButton()
        newUserPage.createNewUser("Norman", "Osborn", "Goblin", "spider")
        loginpage.accessSite()
        loginpage.loginWithTest1User("Goblin", "spider")
        

        if (selectorsList.newUserTuto.includes("Get Started with Real World App")) {
           newUserPage.newUserTutorial() }
        cy.get(selectorsList.newUserTuto).then(($body) => {
            if ($body.text().includes("Get Started with Real World App")) {
           newUserPage.newUserTutorial()        
        }})
        newUserPage.newUserCheck()      

        
    })
    
})
 