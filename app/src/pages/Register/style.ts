import styled from 'styled-components'
import LogoApp from '../../icons/Logo'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 295px;
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
  text-align: left;
  /* margin-top: 102px; */
`

const ContainerTitle = styled.div`
  min-width: 295px;
  /* align-itens: left; */
  /* background-color: red; */
  display: flex;
  flex-direction: column;
`

const Fotter = styled.div`

font-family: Inter;
font-style: Regular;
font-size: 14px;
line-height: 20px;
line-height: 118%;
text-align: center;
vertical-align: Top;
letter-spacing: 0.2px;
color: #6F7FAF;
margin-top: 34px;
`

const Link = styled.a`
  color: #3623B7;
  text-decoration: none;
`




export { Container, Form, Title, TittleLine, Logo, ContainerTitle, Fotter, Link }
