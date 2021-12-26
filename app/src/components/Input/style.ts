import styled from 'styled-components'

const Container = styled.div`
  height: 48px;
  border-radius: 27px;
  display: flex;
  background-color: hsl(225, 29%, 56%, 0.05);
  /* opacity: 0.5; */
`

const InputStyled = styled.input`
  height: 24px;
  margin: 10px 28px 14px 0;
  border: 0;
  padding: 0;
  color: #6f7faf;
  font-family: Inter;
  background: none;
  outline: none; /* tirar borda do input*/
`

const IconContainer = styled.div`
  padding: 12px 16px;
  height: 24px;
  width: 24px;
`

export { Container, InputStyled, IconContainer }
