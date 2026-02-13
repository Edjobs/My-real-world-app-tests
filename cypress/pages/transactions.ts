class Transactions{
    selectorsList(){
        const selectors = {
            transaction: "[href='/transaction/new']",
            testUser: "[data-test='user-list-item-GjWovtg2hr']",
            amount: "[data-test='transaction-create-amount-input']",
            note: "[data-test='transaction-create-description-input']",
            errorMessage1: ".MuiFormHelperText-sizeMedium",
            pay: "[data-test='transaction-create-submit-payment']",
            checkReturnToTransact: "[data-test='new-transaction-return-to-transactions']",
            blankSpace: ".MuiPaper-rounded"
        }
        return selectors
    }

    transactionStart(){
        cy.get(this.selectorsList().transaction).click()
        cy.get(this.selectorsList().testUser).click({ force: true })
        
    }
    transactionSuccess(quantity: string, message: string){
        cy.get(this.selectorsList().amount).type(quantity)
        cy.get(this.selectorsList().note).type(message)
        cy.get(this.selectorsList().pay).click()
        cy.get(this.selectorsList().checkReturnToTransact)
    }
     transactionFail(){
        cy.get(this.selectorsList().amount).click()
        cy.get(this.selectorsList().blankSpace).click()
        cy.get(this.selectorsList().errorMessage1).contains("Please enter a valid amount")


        
    }
    }
   
    

export default Transactions