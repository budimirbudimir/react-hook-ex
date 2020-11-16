import React from 'react'
import { useForm, UseFormMethods } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useSelector, useDispatch } from 'react-redux'

import {
  StyledForm,
  StyledRadioButtons,
  StyledRadioGroup,
  StyledSubmitButton,
  StyledButtonSubmitting,
} from '../../styles/Register.styles'

import {
  // Common: Phrases
  PHRASES_YES,
  PHRASES_NO,
  PHRASES_REGISTER,
  PHRASES_SUBMIT,
  PHRASES_SUBMITTING,

  // Common: Titles
  TITLE_MR,
  TITLE_MRS,
  TITLE_MISS,
  TITLE_DR,

  // Register: Values
  REGISTER_VALUE_FIRST_NAME,
  REGISTER_VALUE_LAST_NAME,
  REGISTER_VALUE_EMAIL,
  REGISTER_VALUE_PHONE,
  REGISTER_VALUE_DEVELOPER,

  // Register: Errors
  REGISTER_ERROR_FIRST_NAME,
  REGISTER_ERROR_LAST_NAME,
  REGISTER_ERROR_EMAIL,
  REGISTER_ERROR_PHONE,
  REGISTER_ERROR_TITLE,
  REGISTER_ERROR_DEVELOPER,

  // Register: Other
  REGISTER_SUCCESSFUL_SUBMIT_LOG,
} from '../../locales/en'

import {
  VALIDATION_FIRST_NAME,
  VALIDATION_LAST_NAME,
  VALIDATION_EMAIL,
  VALIDATION_PHONE,
  VALIDATION_TITLE,
  VALIDATION_DEVELOPER,
} from '../../validations/register'

import { Error, CustomInput, CustomRadio, CustomSelect } from '../../components'
import { FormDataProps } from '../../types/register'
import { setSubmitting, getSubmitting } from './registerSlice'

const Register = () => {
  const dispatch = useDispatch()
  const submitting = useSelector(getSubmitting)

  // Handles the `react-hook-form` implementation.
  const { control, register, handleSubmit, errors }: UseFormMethods = useForm()

  /**
   * Submitting values of uncontrolled form components/elements
   * @function onSubmit
   * @param {FormDataProps} data
   */
  const onSubmit = (data: FormDataProps) => {
    dispatch(setSubmitting(true))
    console.log(PHRASES_SUBMITTING)

    // Simulating POST request to API.
    // TODO Replace with real API calls and wire together.
    setTimeout(() => {
      console.log(REGISTER_SUCCESSFUL_SUBMIT_LOG)
      console.table(data)
      dispatch(setSubmitting(false))
    }, 2000)
  }

  // TODO Too much boilerplate... Break component apart?
  return (
    <>
      <h1>{PHRASES_REGISTER}</h1>

      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <CustomInput
          type="text"
          placeholder={REGISTER_VALUE_FIRST_NAME}
          name="firstname"
          ref={register(VALIDATION_FIRST_NAME)}
        />
        {errors.firstname && <Error msg={REGISTER_ERROR_FIRST_NAME} />}

        <CustomInput
          type="text"
          placeholder={REGISTER_VALUE_LAST_NAME}
          name="lastname"
          ref={register(VALIDATION_LAST_NAME)}
        />
        {errors.lastname && <Error msg={REGISTER_ERROR_LAST_NAME} />}

        <CustomInput
          type="text"
          placeholder={REGISTER_VALUE_EMAIL}
          name="email"
          ref={register(VALIDATION_EMAIL)}
        />
        {errors.email && <Error msg={REGISTER_ERROR_EMAIL} />}

        <CustomInput
          type="tel"
          placeholder={REGISTER_VALUE_PHONE}
          name="phone"
          ref={register(VALIDATION_PHONE)}
        />
        {errors.phone && <Error msg={REGISTER_ERROR_PHONE} />}

        <CustomSelect name="title" ref={register(VALIDATION_TITLE)}>
          <option value={TITLE_MR}>{TITLE_MR}</option>
          <option value={TITLE_MRS}>{TITLE_MRS}</option>
          <option value={TITLE_MISS}>{TITLE_MISS}</option>
          <option value={TITLE_DR}>{TITLE_DR}</option>
        </CustomSelect>
        {errors.title && <Error msg={REGISTER_ERROR_TITLE} />}

        <StyledRadioGroup>
          {REGISTER_VALUE_DEVELOPER}
          <StyledRadioButtons>
            <CustomRadio
              name="developer"
              value={PHRASES_YES}
              ref={register(VALIDATION_DEVELOPER)}
            />
            <CustomRadio
              name="developer"
              value={PHRASES_NO}
              ref={register(VALIDATION_DEVELOPER)}
            />
          </StyledRadioButtons>
          {errors.developer && <Error msg={REGISTER_ERROR_DEVELOPER} />}
        </StyledRadioGroup>

        {submitting ? (
          <StyledButtonSubmitting>{PHRASES_SUBMITTING}</StyledButtonSubmitting>
        ) : (
          <StyledSubmitButton>{PHRASES_SUBMIT}</StyledSubmitButton>
        )}
      </StyledForm>

      {/* Setting up the DevTool for `react-hook-form`. Should be disabled for prod.. */}
      <DevTool control={control} />
    </>
  )
}

export default Register
