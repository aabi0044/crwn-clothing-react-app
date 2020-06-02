import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({
            ...userCredentials,
            [name]: value
        })
    }


    return (
        <div className='sign-in'>
            <h2>
                I already have an account
                </h2>
            <span>
                Sign in  with your email and password
                </span>
            <form onSubmit={handleSubmit} >

                <FormInput
                    name="email"
                    type="email"
                    label="email"
                    value={email}
                    handleChange={handleChange}
                    required
                />
                <label>Email</label>
                <FormInput
                    name="password"
                    type="password"
                    label="password"
                    value={password}
                    handleChange={handleChange}
                    required
                />
                <div className='buttons'>
                    <CustomButton
                        type='submit'
                    >
                        Sign in
                              </CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign in with google
                        </CustomButton>
                </div>



            </form>
        </div>
    )
}

const mapStateToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})
export default connect(null, mapStateToProps)(SignIn)