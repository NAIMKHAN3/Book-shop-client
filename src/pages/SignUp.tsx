import { useFormik } from 'formik';
import Input from '../components/Input';
import Heading from '../components/Heading';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="w-full md:w-1/3  rounded-md md:mx-auto my-5 p-5 border border-[#0874c4]">
        <Heading className="text-center text-3xl text-[#0874c4]">
            Sign Up
        </Heading>
        <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col my-5">
                <label htmlFor="firstName" className="text-xl">Your Name</label>
                <Input
                    className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder="Enter Your Name"
                />
            </div>
            <div className="flex flex-col my-5">
                <label htmlFor="firstName" className="text-xl">Your Email</label>
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
            <Button className="my-5 w-full" type="submit">Sign Up</Button>
        </form>
        <Paragraph className="text-center">
            Already have an account please <Link to='/signin'><span className="text-blue-500">sign in</span></Link>
        </Paragraph>
    </div>
    );
};

export default SignUp;