var students = ["Ali","Usman","Nouman"];
students.splice(1,0,...["Zahid","Anwar"]);
console.log(...students);
students.splice(1,2,...["Zahid","Anwar"]);
console.log(...students);