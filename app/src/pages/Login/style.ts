import styled from 'styled-components'
import LogoApp from '../../icons/Logo'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: lightgray; */
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 295px;
  gap: 20px;
`
const Title = styled.span`
  font-family: Inter;
  font-size: 28px;
  line-height: 40px;
  text-align: left;
  letter-spacing: 0.2px;
  width: 99px;
`
const TittleLine = styled.div`
  margin-top: 14px;
  width: 32px;
  height: 5px;
  background-color: #05cbe7;
  margin-bottom: 65px;
`

const Logo = styled(LogoApp)`
  margin-bottom: 22px;
  text-align: left;
`

const ContainerTitle = styled.div`
  position: relative;
  width: 32px;
  text-align: left;
`

export { Container, Form, Title, TittleLine, Logo, ContainerTitle }
