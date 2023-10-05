class Student {
    constructor(firstName, lastName, birthYear, course) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthYear = birthYear;
      this.course = course;
      this.grades = [];
      this.attendance = [];
    }
  
    addGrade(grade) {
      this.grades.push(grade);
    }
  
    addAttendance(isPresent) {
      this.attendance.push(isPresent);
    }
  
    getAverageGrade() {
      if (this.grades.length === 0) {
        return 0;
      }
      const sum = this.grades.reduce((total, grade) => total + grade, 0);
      return (sum / this.grades.length).toFixed(1);
    }
  
    getAverageAttendance() {
      if (this.attendance.length === 0) {
        return "0%";
      }
      const presentCount = this.attendance.filter((isPresent) => isPresent).length;
      return ((presentCount / this.attendance.length) * 100).toFixed(0) + "%";
    }
  
    getNumberOfClassesAttended() {
      return this.attendance.length;
    }
  
    changeCourse(newCourse) {
      this.course = newCourse;
    }
  
    getStudentInfo() {
      return `Student Name: ${this.firstName} ${this.lastName}\n` +
             `Birth Year: ${this.birthYear}\n` +
             `Course: ${this.course}\n` +
             `Average Grade: ${this.getAverageGrade()}\n` +
             `Average Attendance: ${this.getAverageAttendance()}\n` +
             `Classes Attended: ${this.getNumberOfClassesAttended()}`;
    }
  }
  
  const student = new Student("Vlad", "Martynenko", 2000, "Java Script Basic");
  
  student.addGrade(90);
  student.addGrade(75);
  student.addGrade(95);
  student.addAttendance(true);
  student.addAttendance(true);
  student.addAttendance(true);
  student.addAttendance(false);
  student.addAttendance(true);
  student.addAttendance(true);
  student.addAttendance(true);
  student.addAttendance(true);
  
  console.log(student.getStudentInfo());