//This class is all about descriptive statistics.
class DStatistics {

    constructor(data = [1, 4, 6, 1, 8, 15, 18, 1, 5, 1]) {
        this.sampleData = data
    }

    mean() {
        const n = this.sampleData.length
        let total = 0
        for (let i = 0; i < n; i++) {
            total += this.sampleData[i]
        }
        let MEAN = (total / n).toFixed(2)
        console.log(`The mean of [ ${this.sampleData} ] is ${MEAN}`)
        return MEAN
    }

    median() {

        let arr = this.sampleData.slice().sort(function (a, b) {
            return a - b
        })
        let index
        let MEDIAN
        if (arr.length % 2 !== 0) {
            //we are subtracting one because array are zero indexed.
            index = ((arr.length + 1) / 2) - 1
            MEDIAN = arr[index]
            console.log(`The median of [ ${arr} ] is: ${arr[index]}`)
            return MEDIAN
        } else {
            //we are subtracting one because array are zero indexed.
            index = Math.floor((arr.length) / 2 - 1)
            let n1 = arr[index]
            let n2 = arr[index + 1]

            MEDIAN = ((n1 + n2) / 2).toFixed(2)

            console.log(`The median of [ ${arr} ] is: ${MEDIAN}`)

            return MEDIAN
        }
    }

    mode() {
        const frequencyCounter = {}
        for (let item of this.sampleData) {
            frequencyCounter[item] = ++frequencyCounter[item] || 1
        }
        let max = Math.max(...Object.values(frequencyCounter))
        let MODE
        for (let item in frequencyCounter) {
            if (frequencyCounter[item] === max)
                MODE = item
        }
        console.log(`The mode of [ ${this.sampleData} ] is: ${MODE}`)
        return MODE
    }

    range() {
        let arr = this.sampleData.slice().sort(function (a, b) {
            return a - b
        })
        let lastIndex = arr.length - 1
        let firstIndex = 0
        let RANGE = arr[lastIndex] - arr[firstIndex]

        console.log(`The range of [ ${arr} ] is: ${RANGE}`)

        return RANGE
    }

    variance() {
        let VARIANCE
        let total = 0
        let mean = this.mean()
        let n = this.sampleData.length

        for (let item of this.sampleData) {
            total += (item - mean) ** 2
        }

        VARIANCE = (total / (n - 1)).toFixed(2)

        console.log(`The variance of [ ${this.sampleData} ] is: ${VARIANCE}`)

        return VARIANCE

    }
    standardDeviation() {
        let variance = this.variance()
        let STANDARD_DEVIATION = Math.sqrt(variance).toFixed(2)

        console.log(`The standard deviation of [ ${this.sampleData} ] is: ${STANDARD_DEVIATION}`)

        return STANDARD_DEVIATION

    }
    meanDeviation() {
        let MEAN_DEVIATION
        let total = 0
        let mean = this.mean()
        let n = this.sampleData.length

        for (let item of this.sampleData) {
            total += Math.abs((item - mean))
        }
        MEAN_DEVIATION = (total / n).toFixed(2)

        console.log(`The mean deviation of [ ${this.sampleData} ] is: ${MEAN_DEVIATION}`)

        return MEAN_DEVIATION
    }

    quartileDeviation() {
        let q1 = ((this.sampleData.length + 1) / 4).toFixed(2)
        let q3 = ((3 / 4) * (this.sampleData.length + 1)).toFixed(2)
        let QUARTILE_DEVIATION = ((q3 - q1) / 2).toFixed(2)

        console.log(`The quartile deviation of [ ${this.sampleData} ] is: ${QUARTILE_DEVIATION}`)

        return QUARTILE_DEVIATION
    }
}

const stat = new DStatistics([7, 11, 12, 13, 14, 15, 16, 18, 22])
stat.mean()
stat.median()
stat.mode()
stat.variance()
stat.quartileDeviation()
stat.range()
stat.standardDeviation()