import UserData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import Transactions from '../../pages/transactions'


const loginpage = new LoginPage()
const transaction = new Transactions()

describe ('Enviar dinheiro com saldo suficiente', () => {


    it('Deve enviar dinheiro com sucesso ', () => {
        loginpage.accessSite()
        loginpage.loginWithTest1User(UserData.userSuccess.userName, UserData.userSuccess.password)
        transaction.transactionStart()
        transaction.transactionSuccess("1500", "Hello")
        

 })

})

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginpage.accessSite()
        loginpage.loginWithTest1User(UserData.userSuccess.userName, UserData.userSuccess.password)
        transaction.transactionStart()
        transaction.transactionFail()
  });
});