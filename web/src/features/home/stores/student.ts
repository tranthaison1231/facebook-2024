import { create } from 'zustand'
import { produce } from 'immer'

interface Student {
  name: string
  age: number
  class: {
    name: string
    teacher: {
      name: string
      age: number
    }
  }
}

type State = {
  student: Student
}

type Actions = {
  changeTeacherName: (name: string) => void
}

export const useStudentStore = create<State & Actions>(set => ({
  student: {
    name: 'John',
    age: 20,
    class: {
      name: 'Math',
      teacher: {
        name: 'Mr. Smith',
        age: 40
      }
    }
  },
  changeTeacherName: (name: string) => {
    set(
      produce(state => {
        state.student.class.teacher.name = name
      })
    )
  }
}))
