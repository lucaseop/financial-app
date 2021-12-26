import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import IconColor from '../../icons/IconColor'
import Phone from '../../icons/Phone'
import { Container, Form, Title, TittleLine, Logo, ContainerTitle } from './style'

const PageLogin = () => {
  return (
    <Container>  
        <Logo /> 
        <Title>
          Financial App
        <TittleLine/>
        </Title>
      
      <Form>
        <Input placeholder="Phone number..." Icon={() => <Phone />} />
        <Input placeholder="Password..." Icon={() => <IconColor />} />
        <Button text="Sign in"></Button>
      </Form>

      
    </Container>
  )
}

export default PageLogin
