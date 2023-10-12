// Your code here
function createEmployeeRecord(firstName, familyName, title, payPerHour) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: []
    };
  }
  function createEmployeeRecords(arrays) {
    return arrays.map(arr => createEmployeeRecord(arr));
  }
  
  function createEmployeeRecord(arr) {
    return {
      firstName: arr[0],
      familyName: arr[1],
      title: arr[2],
      payPerHour: arr[3],
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  
  function createTimeInEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeInEvents.push({
      type: "TimeIn",
      date: date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  
  function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
      type: "TimeOut",
      date: date,
      hour: parseInt(hour, 10)
    });
    return employee;
  }
  const employeeData = {
    firstName: "John",
    familyName: "Doe",
    title: "Manager",
    payPerHour: 18, // Adjust the pay rate as needed
    timeInEvents: [
      { type: "TimeIn", date: "2023-10-12", hour: 800 },
      // Add more timeIn events as needed
    ],
    timeOutEvents: [
      { type: "TimeOut", date: "2023-10-12", hour: 1700 },
      // Add more timeOut events as needed
    ],
  };
  
  const date = "2023-10-12"; // The date for which you want to calculate wages
  
  const earnedAmount = wagesEarnedOnDate(employeeData, date);
  
  console.log(`The employee earned $${earnedAmount}`);
  
  function hoursWorkedOnDate(employee, date) {
    const timeIn = employee.timeInEvents.find(event => event.date === date);
    const timeOut = employee.timeOutEvents.find(event => event.date === date);
    
    const hoursWorked = (timeOut.hour - timeIn.hour) / 100;
    return hoursWorked;
  }
  
  function wagesEarnedOnDate(employee, date) {
    const hoursWorked = hoursWorkedOnDate(employee, date);
    const amountOwed = hoursWorked * employee.payPerHour;
    return hoursWorked * employee.payPerHour;
  }
  
  function allWagesFor(employee) {
    const datesWorked = employee.timeInEvents.map(event => event.date);
    const totalWages = datesWorked.reduce((total, date) => total + wagesEarnedOnDate(employee, date), 0);
    return totalWages;
  }
  
  function calculatePayroll(employees) {
    return employees.reduce((totalPayroll, employee) => totalPayroll + allWagesFor(employee), 0);
  }
  