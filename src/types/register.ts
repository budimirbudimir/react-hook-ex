export type TitleType = 'Mr' | 'Miss' | 'Mrs' | 'Dr'
export type YesNoType = 'Yes' | 'No'

export interface FormDataProps {
  firstname: string
  lastname: string
  email: string
  phone: string
  title: TitleType
  developer: YesNoType
}
