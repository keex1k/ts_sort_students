
export interface Student {
  name: string;
  surname: string;
  age: number;
  married: boolean;
  grades: number[];
}

export enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

export type SortOrder = 'asc' | 'desc';

export function sortStudents(students: Student[],
  sortBy: SortType,
  order: SortOrder): Object[] {
  const result = [...students];

  if (order === 'asc') {
    switch (sortBy) {
      case SortType.Name:
        return result.sort((a, b) => a.name.localeCompare(b.name));
      case SortType.Surname:
        return result.sort((a, b) => a.surname.localeCompare(b.surname));
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

          return avgA - avgB;
        });
      default:
        return [];
    }
  } else {
    switch (sortBy) {
      case SortType.Age:
        return result.sort((a, b) => b.age - a.age);
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

          return avgB - avgA;
        });
      default:
        return [];
    }
  }
}
