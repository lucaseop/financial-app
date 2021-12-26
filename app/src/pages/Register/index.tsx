import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IconColor from '../../icons/IconColor'
import Phone from '../../icons/Phone'
import Person from '../../icons/Person'
import Pais from '../../icons/Pais'
import { InputList } from '../../components/Input'
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
        <Input placeholder="Full name..." Icon={() => <Person />} />
        <InputList placeholder="Your country..." Icon={() => <Pais />} />
        <Input placeholder="Phone number..." Icon={() => <Phone />} />
        <Input placeholder="Password..." Icon={() => <IconColor />} />
        <Button text="Create Account"></Button>
        <Fotter>
          Already have an account?{' '}
          <Link href="../Login/index.tsx">Sign in</Link>
        </Fotter>
      </Form>
    </Container>
  )
}

;<datalist id="paises">
  {' '}
  <option>Red</option> <option>Yellow</option> <option>Blue</option>{' '}
  <option>Green</option> <option>Orange</option> <option>Purple</option>{' '}
  <option>Black</option> <option>White</option> <option>Gray</option>{' '}
</datalist>

export default PageRegister
