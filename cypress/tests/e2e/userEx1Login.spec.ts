import UserData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'



const loginpage = new LoginPage()

describe ('Testes do Exercício 1 - Fazer login com sucesso e falha', () => {


    it('Login com sucesso - Deve fazer login com um usuário válido ', () => {
        loginpage.accessSite()
        loginpage.loginWithTest1User(UserData.userSuccess.userName, UserData.userSuccess.password)
        loginpage.checkAccessValid()

 })
    it ('Login sem sucesso', () =>{

        loginpage.accessSite()
        loginpage.loginWithTest1User(UserData.userFail.username, UserData.userFail.password)
        loginpage.checkAccessInvalid()
    })

})
 