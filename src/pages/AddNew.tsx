import { useFormik } from 'formik';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';


const AddNew = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            genre: '',
            price: '',
            image: '',
        },
        onSubmit: values => {
            console.log(values)
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className="w-full md:w-1/3  rounded-md md:mx-auto my-5 p-5 border border-[#0874c4]">
            <Heading className="text-center text-3xl text-[#0874c4]">
                Add New Book
            </Heading>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col my-5">
                    <label htmlFor="firstName" className="text-xl">Book Title</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="title"
                        name="title"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                        placeholder="Title"
                    />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="firstName" className="text-xl">Book Genre</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="genre"
                        name="genre"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.genre}
                        placeholder="Genre"
                    />
                </div>

                <div className="flex flex-col my-5">
                    <label htmlFor="lastName" className="text-xl">Price</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="price"
                        name="price"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.price}
                        placeholder="Price"
                    />
                </div>
                <div className="flex flex-col my-5">
                    <label htmlFor="lastName" className="text-xl">Image</label>
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-3 rounded focus:outline-none focus:border-blue-500"
                        id="image"
                        name="image"
                        type="file"
                        onChange={(event) => {
                            const selectedFile = event.currentTarget.files?.[0];
                            if (selectedFile) {
                                formik.setFieldValue('image', selectedFile);
                            }
                        }}
                        placeholder="image"
                    />
                </div>
                <Button className="my-5 w-full" type="submit">Submit</Button>
            </form>
        </div>
    );
};

export default AddNew;