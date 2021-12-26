import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IconColor from '../../icons/IconColor'
import Phone from '../../icons/Phone'
import { Container, Form, Title } from './style'

const PageLogin = () => {
  return (
    <Container>
      <Form>
        <Title>Sign in to Splash.</Title>
        <hr />
        <Input Icon={() => <Phone color="#6F7FAF" />} />
        <Button text="Sign in"></Button>
      </Form>
    </Container>
  )
}

export default PageLogin
