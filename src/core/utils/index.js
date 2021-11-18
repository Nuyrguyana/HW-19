import moment from 'moment'


export const calculateSumOfNumbers = (numbers) => {
   return numbers.reduce((a, b) => a + b, 0)

}

export const getFormattedTime = (date) => {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}