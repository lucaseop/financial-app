import { HTMLAttributes } from 'react'
import { ButtonStyled, LoadingSpin, LoadingContainer } from './styles'

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  loading?: boolean
}

export const Button = ({ text, loading, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled isDisabled={loading} disabled={loading} {...rest}>
      {loading ? (
        <LoadingContainer>
          <LoadingSpin />
        </LoadingContainer>
      ) : (
        text
      )}
    </ButtonStyled>
  )
}
