import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IconColor from '../../icons/IconColor'
import Phone from '../../icons/Phone'
import { toast } from 'react-toastify'
import {
  Container,
  Form,
  Title,
  TittleLine,
  Logo,
  ContainerTitle,
  Fotter,
  Link
} from './style'
import { useState } from 'react'

const PageLogin = () => {
  const [state, setstate] = useState({phone:"",pass:""})
  const loginUser = (phone: string, pass: string) => {
    if (phone === '333' && pass === '123') {
      toast.success('Sucesso !')
    } else {
      toast.error('Wow so easy !')
    }
  }

  return (
    <Container>
      <ContainerTitle>
        <Logo />
        <Title>
          Financial App
          <TittleLine />
        </Title>
      </ContainerTitle>

      <Form>
        <Input placeholder="Phone number..." Icon={() => <Phone />} />
        <Input placeholder="Password..." Icon={() => <IconColor />} />
        <Button text="Sign in"></Button>
        <Fotter>
          Don’t have an account?{' '}
          <Link href="../Register/index.tsx">Register</Link>
        </Fotter>
      </Form>
    </Container>
  )
}

export default PageLogin

//
