// Определение класса студента
class Student {
  constructor(name, dateOfBirth, enrollmentYear, course, group, grades) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.enrollmentYear = enrollmentYear;
    this.course = course;
    this.group = group;
    this.grades = grades;
  }

  getAverageGrade() {
    const sum = this.grades.reduce((acc, cur) => acc + cur, 0);
    return sum / this.grades.length;
  }
}

// Создание списка студентов
const students = [
  new Student('Иванов Иван', '01.01.2000', 2020, 1, 'Группа 101', [4, 5, 4, 4]),
  new Student('Петров Петр', '05.03.1999', 2019, 2, 'Группа 201', [5, 5, 4, 5]),
  // ...другие студенты
  new Student('Сидоров Сидор', '10.12.2001', 2021, 1, 'Группа 102', [3, 4, 3, 4])
];

// Упорядочивание списка студентов по среднему баллу
students.sort((a, b) => b.getAverageGrade() - a.getAverageGrade());

// Вывод отсортированного списка студентов
console.log('Отсортированный список студентов по среднему баллу:');
students.forEach(student => {
  console.log(`${student.name} - Средний балл: ${student.getAverageGrade()}`);
});
