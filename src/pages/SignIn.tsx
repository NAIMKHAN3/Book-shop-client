import Heading from "../components/Heading";

import { useFormik } from 'formik';
import Input from "../components/Input";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
const SignIn = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="w-full md:w-1/3 rounded-md mx-auto my-5 p-5 border border-[#0874c4]">
            <Heading className="text-center text-3xl text-[#0874c4]">
                Sign In
            </Heading>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col my-5">
                    <label htmlFor="firstName" className="text-xl">Email</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="Enter Your Email"
                    />
                </div>

                <div className="flex flex-col my-5">
                    <label htmlFor="lastName" className="text-xl">Password</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="password"
                        name="password"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Enter Your Password"
                    />
                </div>
                <Button className="my-5 w-full" type="submit">Sign In</Button>
            </form>
            <Paragraph className="text-center">
                New to book shop please <Link to='/signup'><span className="text-blue-500">sign up</span></Link>
            </Paragraph>
        </div>
    );
};

export default SignIn;