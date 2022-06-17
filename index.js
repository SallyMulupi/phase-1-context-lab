/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(recordArr) {
    return {
        firstName: recordKls[0],
        familyName: recordKls[1],
        title: recordKls[2],
        payPerHour: recordKls[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

}

function createEmployeeRecords(recordArrOfArr) {
    return recordArrOfArr.map(Arr => createEmployeeRecord(Arr))

}

function createTimeInEvent(recordArr, dateHour) {
    const [date, hour] = dateHour.split(' ')

    const timeInObject = {
        type: 'TimeIn',
        hour: hour,
        date: date,
    }
    recordArr.timeInEvents.push(timeInObject)
    return recordArr;


}

function createTimeOutEvent(recordArr, dateHour) {
    const timeOutObject = {
        type: 'TimeOut',
        hour: hour,
        date: date,
    }
    recordArr.timeOutEvents.push(timeOutObject)
    return recordArr
}


function hoursWorkedOnDate(recordArr, dateHour) {
    const timeIn = recordArr.timeInEvents.find(dateStamp => dateStamp.date === dateNoHour).hour

    const timeOut = recordArr.timeOutEvents.find(dateStamp => dateStamp.date === dateNoHour).hour
    const hoursWorked = (timeOut - timeIn)
    return hoursWorked / 100

}

function wagesEarnedOnDate(recordArr, dateHour) {
    const hoursWorked = hoursWorkedOnDate(recordArr, dateNoHour)
    const ratePerHour = recordKls.payPerHour
    return (hoursWorked * ratePerHour)
}

function allWagesFor(recordArr) {
    const dateWorked = []
    recordArr.timeOutEvents.map(dateStamp => dateWorked.push(dateStamp.date))
    const wagesOnDate = dateWorked.map(dateStamp => wagesEarnedOnDate(recordKls, dateStamp))
    const payOwned = wagesOnDate.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)
    return payOwned


}

function calculatePayroll(recordArr) {
    const totalWagesPerDay = []
    recordArrOfArr.map(arr => {
        allWagesFor(arr)
        const wagesOnDate = arr
            .timeOutEvents.map(dateStamp => wagesEarnedOnDate(kls, dateStamp.date))
        const employeesWages = wagesOnDate.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)
        totalWagesPerDay.push(employeesWages)
    })
    return totalWagesPerDay.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)



}