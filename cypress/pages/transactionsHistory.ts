class TransactionsHistory{
    selectorsList(){
        const selectors = {
            personalHistory: "[href='/personal']",
            subHeader: ".MuiListSubheader-root",
            emptyTransactions: "[data-test='empty-list-header']"
        }
        return selectors
    }
    checkPersonalHistory(){
        cy.get(this.selectorsList().personalHistory).click()
            cy.get(this.selectorsList().subHeader).contains("Personal")
    }
    checkEmptyHistory(){
        cy.get(this.selectorsList().emptyTransactions).contains("No Transactions")
    }
}

export default TransactionsHistory