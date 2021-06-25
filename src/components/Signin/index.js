import React from 'react'
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SigninElements'

function Signin(props) {

    const { register, handleSubmit } = useForm();
const onSubmit = (data)=> {
    

}
    return (
        <>
            <Container >
                <FormWrap>
                    <Icon to="/">dolla</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={handleSubmit(onSubmit)}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                                <FormInput {...register("email")} type="email" required />
                                <FormLabel htmlFor="for">Password</FormLabel>
                                <FormInput {...register("password")} type="password" required />
                                <FormButton type="submit">Continue</FormButton>
                                <Text to ="/">Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
