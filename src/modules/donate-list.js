import {resolveShowConfigPath} from "@babel/core/lib/config/files";

export class DonateList {
    #donates
    #donatesTextHTML
    #donatesContainer

    constructor(donates) {
        this.#donates = donates
    }

    render() {
        this.#donatesContainer = document.createElement('div')
        this.#donatesContainer.className = 'donates-container'

        this.#donatesTextHTML = document.createElement('h2')
        this.#donatesTextHTML.className = 'donates-container__title'
        this.#donatesTextHTML.textContent = 'Список донатов'

        const divDonatesContainerDonates = document.createElement('div')
        divDonatesContainerDonates.className = 'donates-container__donates'

        this.#donates.forEach((donate) => {
            this.#donatesContainer.append(this.renderItem(donate))
        })

        // divDonatesContainerDonates.append(divDonateItem)
        this.#donatesContainer.prepend(this.#donatesTextHTML)
        this.#donatesContainer.append(divDonatesContainerDonates)

        console.log(this.#donatesContainer)
        return this.#donatesContainer


    }

    renderItem(donate) {
        const divDonateItem = document.createElement('div')
        divDonateItem.className = 'donate-item'
        divDonateItem.textContent = donate.date
        const amountDonates = document.createElement('b')
        amountDonates.textContent = donate.amount + '$'

        divDonateItem.append(amountDonates)
        return divDonateItem
    }
}