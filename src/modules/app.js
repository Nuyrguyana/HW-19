import {DonateForm} from "./donate-form"
import {DonateList} from "./donate-list"

const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
]

export default class App {
    #donateForm

    constructor() {
        this.#donateForm = new DonateForm()
        
    }

    run() {
        const donateFormHTML = this.#donateForm.render()
        console.log('Hello world!')
        document.body.append(donateFormHTML)

        const donateListHTML = new DonateList(mockDonates)
        document.body.append(donateListHTML.render())
    }
}

