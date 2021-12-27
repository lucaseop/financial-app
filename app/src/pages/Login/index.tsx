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
import { ChangeEvent, useState } from 'react'

const PageLogin = () => {
  const [state, setState] = useState({ phone: '', pass: '' })
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
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

      <Form
        onSubmit={e => {
          e.preventDefault()
          loginUser(state.phone, state.pass)
        }}
      >
        <Input
          name="phone"
          value={state.phone}
          placeholder="Phone number..."
          Icon={() => <Phone />}
          onChange={handleChange}
        />
        <Input
          name="pass"
          value={state.pass}
          placeholder="Password..."
          Icon={() => <IconColor />}
          onChange={handleChange}
        />
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
