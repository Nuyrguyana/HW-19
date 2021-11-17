import {DonateForm} from "./donate-form"
import {DonateList} from "./donate-list"

export default class App {
    #donateForm
    state
    #donateList

    constructor() {
        this.state = {
            donates: [],
            totalAmount: 555
        }
        this.#donateForm = new DonateForm(this.state.totalAmount, this.createNewDonate.bind(this))
        // this.#donateList = new DonateList(this.state.donates)
    }

    run() {
        const donateFormHTML = this.#donateForm.render()
        console.log('Hello world!')
        document.body.append(donateFormHTML)

        const donateListHTML = new DonateList(this.state.donates)
        document.body.append(donateListHTML.render())
    }

    createNewDonate(newDonate) {
        this.state.donates.push(newDonate)
        this.state.totalAmount += newDonate.amount
        console.log(this.#donateList)
        DonateList.prototype.updateDonates(this.state.donates)
        this.#donateForm.updateTotalAmount(this.state.totalAmount)
    }
}

