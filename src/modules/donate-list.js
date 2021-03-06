import {Settings} from "../core/constants/settings"

export class DonateList {
    #donates
    #donatesTextHTML
    donatesContainer

    constructor(donates) {
        this.#donates = donates
    }

    render() {
        this.donatesContainer = document.createElement('div')
        this.donatesContainer.className = 'donates-container'

        this.#donatesTextHTML = document.createElement('h2')
        this.#donatesTextHTML.className = 'donates-container__title'
        this.#donatesTextHTML.textContent = 'Список донатов'

        const divDonatesContainerDonates = document.createElement('div')
        divDonatesContainerDonates.className = 'donates-container__donates'

        this.renderDonate(divDonatesContainerDonates, this.#donates)

        this.donatesContainer.prepend(this.#donatesTextHTML)
        this.donatesContainer.append(divDonatesContainerDonates)

        return this.donatesContainer


    }

    renderItem(donate) {
        const divDonateItem = document.createElement('div')
        divDonateItem.className = 'donate-item'
        divDonateItem.textContent = donate.date
        const amountDonates = document.createElement('b')
        amountDonates.textContent = donate.amount + `${Settings.currency}`

        divDonateItem.append(amountDonates)
        return divDonateItem
    }

    renderDonate(donatesContainer, donates) {
        donates.forEach((donate) => {
            donatesContainer.append(this.renderItem(donate))
        })
    }

    updateDonates(updatedDonates) {
        let donatesContainerDonates = document.querySelector('.donates-container__donates')
        while(donatesContainerDonates.firstChild){
            donatesContainerDonates.removeChild(donatesContainerDonates.firstChild)
        }
        this.renderDonate(donatesContainerDonates, updatedDonates)
    }
}