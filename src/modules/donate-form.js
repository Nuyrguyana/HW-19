export class DonateForm {
    #container
    #totalAmount

    constructor(totalAmount) {
        this.#container = document.createElement('form')
        this.#container.className = 'donate-form'
        this.#totalAmount = totalAmount
    }

    render() {
        const h1 = this.createH1Element()
        const label = this.createLabelElement()
        const input = this.createInputElement()
        const button = this.createButtonElement()

        label.append(input)
        this.#container.append(h1, label, button)

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
        label.textContent = 'Введите сумму в $'

        return label
    }

    createH1Element() {
        const h1 = document.createElement('h1')
        h1.className = 'total-amount'
        h1.textContent = '28$'
        return h1
    }
}