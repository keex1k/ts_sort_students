
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  // describe SortType enum
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

// create SortOrder type
export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Object[] {
  // write your function
  const result = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return result.sort((a, b) => {
          const nazwaA: string = a.name.toUpperCase();
          const nazwaB: string = b.name.toUpperCase();

          if (nazwaA < nazwaB) {
            return -1;
          }

          if (nazwaA > nazwaB) {
            return 1;
          }

          return 0; // Jeśli są równe
        });
      case SortType.Surname:
        return result.sort((a, b) => {
          const nazwaA: string = a.surname.toUpperCase();
          const nazwaB: string = b.surname.toUpperCase();

          if (nazwaA < nazwaB) {
            return -1;
          }

          if (nazwaA > nazwaB) {
            return 1;
          }

          return 0; // Jeśli są równe
        });
      case SortType.AverageGrade:
        return result.sort((a, b) => {
          const sumaA: number = a.grades.reduce((x, y) => {
            return x + y;
          }, 0);
          const sumaB: number = b.grades.reduce((x, y) => {
            return x + y;
          }, 0);

          const avgA: number = sumaA / a.grades.length;
          const avgB: number = sumaB / b.grades.length;

          if (avgA > avgB) {
            return 1;
          }

          if (avgA < avgB) {
            return -1;
          }

          return 0; // Jeśli są równe
        });
      default:
        return [];
    }
  } else {
    switch (sortBy) {
      case SortType.Age:
        return result.sort((a, b) => {
          const nazwaA: number = a.age;
          const nazwaB: number = b.age;

          if (nazwaA < nazwaB) {
            return 1;
          }

          if (nazwaA > nazwaB) {
            return -1;
          }

          return 0; // Jeśli są równe
        });
      case SortType.Married:
        return result.sort((a, b) => {
          if (a.married === b.married) {
            return 0;
          }

          if (a.married) {
            return -1;
          }

          return 1;
        });
      case SortType.AverageGrade:
        return result.sort((a, b) => {
          const sumaA: number = a.grades.reduce((x, y) => {
            return x + y;
          }, 0);
          const sumaB: number = b.grades.reduce((x, y) => {
            return x + y;
          }, 0);

          const avgA: number = sumaA / a.grades.length;
          const avgB: number = sumaB / b.grades.length;

          if (avgA > avgB) {
            return -1;
          }

          if (avgA < avgB) {
            return 1;
          }

          return 0; // Jeśli są równe
        });
      default:
        return [];
    }
  }
}
