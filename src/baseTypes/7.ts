/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thuersday = "Thuersday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

const isWeekend = (day: Days): boolean => day === Days.saturday || day === Days.sunday;

