import styled from 'styled-components'

export const StyledForm = styled.form`
  min-width: 260px;
`
export const StyledSelect = styled.select`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
`
export const StyledInput = styled.input`
  display: block;
  background: #fff;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #000;
  cursor: pointer;
  margin-bottom: 10px;
  width: 100%;
  border-radius: 5px;
  height: 35px;
  box-shadow: 0px;
  outline: none;
  padding: 8px;
  transition: 0.15s;
  text-align: left;

  &:active {
    background-color: #f1ac15;
  }

  &[type='radio'] {
    width: 16px;
    display: inline-block;
    margin: 0 6px;
  }
`
export const StyledRadioWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`
export const StyledRadioButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const StyledRadioGroup = styled.div`
  font-size: 14px;
`
export const StyledSubmitButton = styled.button`
  background-color: #333;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  padding: 8px;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
export const StyledError = styled.p`
  margin: 0 auto 10px;
  text-align: left;
  font-size: 12px;
  color: red;
`
export const StyledButtonSubmitting = styled.span`
  font-size: 14px;
  color: #555;
`
