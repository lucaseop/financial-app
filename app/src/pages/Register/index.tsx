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

const PageRegister = () => {
  return (
    <Container>
      <ContainerTitle>
        <Logo />
        <Title>
          Create a new account
          <TittleLine />
        </Title>
      </ContainerTitle>

      <Form>
        <Input placeholder="Full name..." Icon={() => <Phone />} />
        <Input placeholder="Your country..." Icon={() => <IconColor />} />
        <Input placeholder="Phone number..." Icon={() => <Phone />} />
        <Input placeholder="Password..." Icon={() => <IconColor />} />
        <Button text="Create Account"></Button>
        <Fotter>
        Already have an account?  <Link href=''>Sign in</Link>
        </Fotter>
      </Form>
    </Container>
  )
}

export default PageRegister
