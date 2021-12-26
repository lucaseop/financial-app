import { HTMLAttributes } from 'react'
import { Container, IconContainer, InputStyled } from './style'

interface InputProps extends HTMLAttributes<HTMLInputElement>{
  //   text: string
  Icon: () => JSX.Element
}

export const Input = ({ Icon, ...rest }: InputProps) => {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <InputStyled {...rest}/>
    </Container>
  )
}

export const InputList = ({Icon, ...rest}: InputProps) => {
  return(
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <InputStyled {...rest}/>
    </Container>

  )
}
