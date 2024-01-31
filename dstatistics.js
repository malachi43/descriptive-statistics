//Using static methods and variables.
class Calculator {
    static PI = 3.14159265
    static diameter = 240

    static calculateRadius() {
        //using static property
        console.log(`The radius of diameter ${Calculator.diameter}m is: ${Calculator.diameter / 2}m`)
    }

    static computeAreaOfCircle() {
        //using static property
        let area = (Calculator.PI * (Calculator.diameter / 2) ** 2).toFixed(2)
        console.log(`The area of a circle of radius ${Calculator.diameter / 2}m is ${area} meter squared.`)
    }
}
console.clear()

console.log(`PI:`, Calculator.PI)
console.log(`Diameter:`, Calculator.diameter)
Calculator.calculateRadius()
Calculator.computeAreaOfCircle()
console.log()
console.log()


//This class is all about descriptive statistics.
class DStatistics {

    constructor(data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 7]) {
        this.sampleData = data
    }

    mean() {
        const n = this.sampleData.length
        let total = 0
        for (let i = 0; i < n; i++) {
            total += this.sampleData[i]
        }
        let MEAN = (total / n).toFixed(2)
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
            return MEDIAN
        } else {
            //we are subtracting one because array are zero indexed.
            index = Math.floor((arr.length) / 2 - 1)
            let n1 = arr[index]
            let n2 = arr[index + 1]

            MEDIAN = ((n1 + n2) / 2).toFixed(2)


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
        return MODE
    }

    range() {
        let arr = this.sampleData.slice().sort(function (a, b) {
            return a - b
        })
        let lastIndex = arr.length - 1
        let firstIndex = 0
        let RANGE = arr[lastIndex] - arr[firstIndex]


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


        return VARIANCE

    }
    standardDeviation() {
        let variance = this.variance()
        let STANDARD_DEVIATION = Math.sqrt(variance).toFixed(2)


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



        return MEAN_DEVIATION
    }

    quartileDeviation() {
        let q1 = ((this.sampleData.length + 1) / 4).toFixed(2)
        let q3 = ((3 / 4) * (this.sampleData.length + 1)).toFixed(2)
        let QUARTILE_DEVIATION = ((q3 - q1) / 2).toFixed(2)

        return QUARTILE_DEVIATION
    }
}

const stat = new DStatistics()
console.log(`The mean: `, stat.mean())
console.log(`The median: `, stat.median())
console.log(`The mode: `, stat.mode())
console.log(`The range: `, stat.range())
console.log(`The mean deviation: `, stat.meanDeviation())
console.log(`The variance: `, stat.variance())
console.log(`The standard deviation: `, stat.standardDeviation())
console.log(`The quartile deviation: `, stat.quartileDeviation())
