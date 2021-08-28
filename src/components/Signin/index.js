import React from 'react'
import { Icon } from '../Sidebar/SidebarElements'
import { Container, FormButton, FormContent, FormInput, FormLabel, FormWrap, FormH1, Form, Text } from './SigninElements'

const Signin = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/">WEBiLO</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Get Your Quote By Answer this Question.</FormH1>
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor="for">Password</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forgot Password?</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin
