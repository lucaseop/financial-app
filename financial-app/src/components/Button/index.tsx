import { ButtonStyled } from "./styles"

interface ButtonProps{
    text:string
}

export const Button = ({text}:ButtonProps) => {
    return(<ButtonStyled>
        {text}
    </ButtonStyled>)
}