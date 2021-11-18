import {DonateForm} from "./donate-form"
import {DonateList} from "./donate-list"
import * as Utils from "../core/utils/index"

export default class App {
    #donateForm
    state
    #donateList

    mockDonates = [
        { amount: 4, date: Utils.getFormattedTime(new Date()) },
        { amount: 20, date: Utils.getFormattedTime(new Date()) },
        { amount: 3, date: Utils.getFormattedTime(new Date()) },
        { amount: 1, date: Utils.getFormattedTime(new Date()) },
    ]

    constructor() {
        this.state = {
            donates: this.mockDonates,
            totalAmount: Utils.calculateSumOfNumbers(this.mockDonates.map((donate) => {
                return donate.amount
            }))
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
        console.log(newDonate)
        console.log(this.state.totalAmount)
        console.log(this.#donateList)
        DonateList.prototype.updateDonates(this.state.donates)
        this.#donateForm.updateTotalAmount(this.state.totalAmount)
    }
}

