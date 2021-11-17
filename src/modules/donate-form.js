import {Settings as Set} from "../core/constants/settings";

export class DonateForm {
    #container
    #totalAmount
    createNewDonate

    constructor(totalAmount, createNewDonate) {
        this.#container = document.createElement('form')
        this.#container.className = 'donate-form'
        this.#totalAmount = totalAmount
        this.createNewDonate = createNewDonate.bind(this)

    }

    render() {
        const h1 = this.createH1Element()
        const label = this.createLabelElement()
        const input = this.createInputElement()
        const button = this.createButtonElement()

        label.append(input)
        this.#container.append(h1, label, button)

        this.createEventListener()

        return this.#container

    }

    createButtonElement() {
        const button = document.createElement('button')
        button.className = 'donate-form__submit-button'
        button.type = 'submit'
        button.textContent = 'Задонатить'

        return button
    }

    createInputElement() {
        const input = document.createElement('input')
        input.className = 'donate-form__donate-input'
        input.name = 'amount'
        input.type = 'number'
        input.max = '100'
        input.min = '0'
        // input.required = ''

        return input
    }

    createLabelElement() {
        const label = document.createElement('label')
        label.className = 'donate-form__input-label'
        label.textContent = `Введите сумму в ${Set.currency}`

        return label
    }

    createH1Element() {
        const h1 = document.createElement('h1')
        h1.className = 'total-amount'
        h1.textContent = `${this.#totalAmount} ${Set.currency}`
        return h1
    }

    updateTotalAmount(newAmount) {
        const totalAmountId = document.getElementById('#total-amount')
        totalAmountId.textContent = `${newAmount} ${Set.currency}`
    }

    createEventListener() {
        this.#container.addEventListener('submit', (event) => {
            event.preventDefault()
            const {target} = event
            const donateNameInput = target.amount
            const inputValue = donateNameInput.value

            if (inputValue) {
                const newDonate = {
                    amount: Number(inputValue),
                    date: new Date()
                }
                console.log(newDonate)
                this.createNewDonate(newDonate)
                document.querySelector('.donate-form__donate-input').textContent = ''


            }
        })
    }

}