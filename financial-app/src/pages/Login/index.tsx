import { Button } from "../../components/Button"
import { Container, Form } from "./style"

const PageLogin = () => {
    return <Container>
        <Form>
            <h1>Sign in to
    Splash.</h1><hr />
            <input type="text" />
            <input type="text" />
            <Button text="Sign in"></Button>
        </Form>
        
    </Container>
}

export default PageLogin