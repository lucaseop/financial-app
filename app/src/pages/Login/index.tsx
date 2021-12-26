import { Button } from '../../components/Button'
import { Container, Form, Title } from './style'

const PageLogin = () => {
  return (
    <Container>
      <Form>
        <Title>Sign in to Splash.</Title>
        <hr />

        <input type="text" />
        <input type="text" />
        <Button text="Sign in"></Button>
      </Form>
    </Container>
  )
}

export default PageLogin
