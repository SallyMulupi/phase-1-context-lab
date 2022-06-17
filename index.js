/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord(recordKls) {
    return {
        firstName: recordKls[0],
        familyName: recordKls[1],
        title: recordKls[2],
        payPerHour: recordKls[3],
        timeInEvents: [],
        timeOutEvents: [],
    }

}

function createEmployeeRecords(recordArrOfKls) {
    return recordArrOfKls.map(Kll => createEmployeeRecord(Kls))

}

function createTimeInEvent(recordKls, dateHour) {
    const [date, hour] = dateHour.split(' ')

    const timeInObject = {
        type: 'TimeIn',
        hour: hour,
        date: date,
    }
    recordKls.timeInEvents.push(timeInObject)
    return recordKls;


}

function createTimeOutEvent(recordKls, dateHour) {
    const timeOutObject = {
        type: 'TimeOut',
        hour: hour,
        date: date,
    }
    recordArr.timeOutEvents.push(timeOutObject)
    return recordKls
}


function hoursWorkedOnDate(recordKls, dateHour) {
    const timeIn = recordArr.timeInEvents.find(dateStamp => dateStamp.date === dateNoHour).hour

    const timeOut = recordArr.timeOutEvents.find(dateStamp => dateStamp.date === dateNoHour).hour
    const hoursWorked = (timeOut - timeIn)
    return hoursWorked / 100

}

function wagesEarnedOnDate(recordKls, dateHour) {
    const hoursWorked = hoursWorkedOnDate(recordKls, dateNoHour)
    const ratePerHour = recordKls.payPerHour
    return (hoursWorked * ratePerHour)
}

function allWagesFor(recordKls) {
    const dateWorked = []
    recordKls.timeOutEvents.map(dateStamp => dateWorked.push(dateStamp.date))
    const wagesOnDate = dateWorked.map(dateStamp => wagesEarnedOnDate(recordKls, dateStamp))
    const payOwned = wagesOnDate.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)
    return payOwned


}

function calculatePayroll(recordKls) {
    const totalWagesPerDay = []
    recordArrOfKls.map(kls => {
        allWagesFor(kls)
        const wagesOnDate = kls
            .timeOutEvents.map(dateStamp => wagesEarnedOnDate(kls, dateStamp.date))
        const employeesWages = wagesOnDate.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)
        totalWagesPerDay.push(employeesWages)
    })
    return totalWagesPerDay.reduce((previousValue, currentValue) => (previousValue + currentValue), 0)



}