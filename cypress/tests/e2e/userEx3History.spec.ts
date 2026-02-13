import UserData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import Transactions from '../../pages/transactions'
import NewUserPage from '../../pages/newUserPage'
import TransactionsHistory from '../../pages/transactionsHistory'

const loginpage = new LoginPage()
const transaction = new Transactions()
const newUserPage = new NewUserPage()
const transactionsHistory = new TransactionsHistory()

const selectors = {
            personalHistory: "[href='/personal']",
            subHeader: ".MuiListSubheader-root",
            emptyTransactions: "[data-test='empty-list-header']"
        }

        
        
    describe('Visualizar histórico de transações com sucesso', () => {
        it('Deve exibir o histórico de transações de um usuário corretamente', () => {
            loginpage.accessSite()
            loginpage.loginWithTest1User(UserData.userSuccess.userName, UserData.userSuccess.password)
            transactionsHistory.checkPersonalHistory()
            
        });
});

    describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it.only('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginpage.accessSite()
    loginpage.loginWithTest1User("Goblin", "spider")
    transactionsHistory.checkPersonalHistory()
    transactionsHistory.checkEmptyHistory()

  });
});
        