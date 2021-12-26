import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IconColor from '../../icons/IconColor'
import Phone from '../../icons/Phone'
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

const PageLogin = () => {
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
          Don’t have an account? <Link href='../Register/index.tsx'>Register</Link>
        </Fotter>
      </Form>
    </Container>
  )
}

export default PageLogin
