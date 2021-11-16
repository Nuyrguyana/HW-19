import {DonateForm} from "./donate-form"
import {DonateList} from "./donate-list"

// const mockDonates = []

export default class App {
    #donateForm
    state

    constructor() {
        this.state = {
            donates: [
                {amount: 4, date: new Date()},
                {amount: 20, date: new Date()},
                {amount: 3, date: new Date()},
                {amount: 1, date: new Date()}
            ],
            totalAmount: 0
        }
        this.#donateForm = new DonateForm(this.state.totalAmount)
    }

    run() {
        const donateFormHTML = this.#donateForm.render()
        console.log('Hello world!')
        document.body.append(donateFormHTML)

        const donateListHTML = new DonateList(this.state.donates)
        document.body.append(donateListHTML.render())
    }
}

