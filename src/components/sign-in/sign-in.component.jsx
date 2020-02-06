import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';


class SignIn extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>
                    I already have an account
                </h2>
                <span>
                    Sign in  with your email and password
                </span>
                <form onSubmit={this.handleSubmit} >

                    <FormInput
                        name="email"
                        type="email"
                        label="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <label>Email</label>
                    <FormInput
                        name="password"
                        type="password"
                        label="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with google
                        </CustomButton>
                    </div>
                

                
                </form>
            </div>
        )
    }
}
export default SignIn