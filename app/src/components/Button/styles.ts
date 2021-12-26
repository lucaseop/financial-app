import styled, { css } from 'styled-components'
import { Button } from '.'
interface ButtonStyledProps {
  isDisabled?: boolean
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  height: 56px;
  background: #05cbe7;
  border-radius: 28px;
  color: white;
  font-family: Inter;
  font-size: 16px;
  line-height: 24px;
  border: 1px;
  border-color: #05cbe7;
  &:hover {
    background: red;
  }
  cursor: pointer;
  ${props =>
    props.isDisabled &&
    css`
      cursor: not-allowed;
    `}
    margin-top: 50px;
`
const LoadingSpin = styled.div`
  border: 3px solid #f3f3f3;
  border-radius: 50%;
  width: 20.93px;
  height: 24px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export { ButtonStyled, LoadingSpin, LoadingContainer }
