import React, { memo } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
`

const StyledLabel = styled.label`
  font-family: KleeRegular;
  font-weight: 900;
  color: #d9d9d9;
  font-size: 18px;
`
const StyledInput = styled.input`
  background: #171717;
  border: 2px solid #212121;
  width: 100%;
  height: 70px;
  border-radius: 18px;
  margin: 10px 0 30px 0;
  color: white;
  padding-left: 20px;
  font-weight: 900;
  font-family: KleeRegular;

  &:active, &:focus {
    outline: none;
    border: 2px solid #d227ab;
  }

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    font-weight: 300;
    opacity: 1;
  }

  &:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: white;
    font-weight: 300;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: white;
    font-weight: 300;
  }
`

function Input({ label, type, placeholder, autocomplete, setUserCredentials }) {

  const handleInputChange = (event) => {
    const { id, value } = event.target
    
    setUserCredentials((prevCreds) => {
      return {...prevCreds, [id.toLowerCase()]: value}
    })
  }

  return (
    <StyledContainer>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput type={type}
                   name={label}
                   id={label}
                   placeholder={placeholder}
                   autoComplete={autocomplete}
                   onChange={(event) => handleInputChange(event)}
                   />
    </StyledContainer>
  )
}


export default memo(Input);
