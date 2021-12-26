import { Container, IconContainer, InputStyled } from './style'

interface InputProps {
  //   text: string
  Icon: () => JSX.Element
}

export const Input = ({ Icon }: InputProps) => {
  return (
    <Container>
      <IconContainer>
        <Icon />
      </IconContainer>
      <InputStyled />
    </Container>
  )
}
