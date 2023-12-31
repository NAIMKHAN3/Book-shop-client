import { useFormik } from 'formik';
import Heading from '../components/Heading';
import Input from '../components/Input';
import Button from '../components/Button';
import { useBookPostMutation, useImageUploadeMutation } from '../redux/book/bookApi';
import { IError, IImageResponse } from '../types/types';
import { useEffect } from 'react';
import { useAppSelector } from '../redux/hook';
import toast from 'react-hot-toast';

const AddNew = () => {
    // const dispatch = useAppDispatch()
    const {token} = useAppSelector(state => state.user)

    const [imageUpload] = useImageUploadeMutation()
    const [bookPost, { data, isLoading, isError, isSuccess, error }] = useBookPostMutation()
    const formik = useFormik({
        initialValues: {
            title: '',
            genre: '',
            price: '',
            image: '',
        },
        onSubmit: async (values) => {
            const imageFile = values.image[0]
            const formData = new FormData();
            formData.append('image', imageFile);
            const image = await imageUpload(formData)
            if (image) {
                const imageRespone = image as IImageResponse
                const book = {
                    title: values.title,
                    genre: values.genre,
                    price: parseInt(values.price),
                    image: imageRespone?.data?.data?._id
                }
                bookPost({book, token})
                formik.resetForm();
            }
        },
    });
    useEffect(()=>{
        if (isLoading) {
            toast.loading('Posting...', { id: 'signup' })
        }
        if (isSuccess) {
            toast.success(data?.message, { id: 'signup' })
        }
        if (isError) {
            const errorMessage = error as IError
            const message = errorMessage.data?.message || 'Something went wrong'
            toast.error(message, { id: 'signup' })
        }
    },[isError, isLoading, isSuccess])
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
                            const selectedFile = event?.currentTarget.files;
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