
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useBookReviewMutation, useDeleteBookMutation, useGetSingleBookQuery } from '../redux/book/bookApi';
import { IBookResponse } from '../types/types';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import Heading from '../components/Heading';
import { useFormik } from 'formik';
import Input from '../components/Input';
import { useAppSelector } from '../redux/hook';
import Button from '../components/Button';
import toast from 'react-hot-toast'

const BookDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data } = useGetSingleBookQuery(id)
    const [postReview, { data: response, isSuccess }] = useBookReviewMutation()
    const [deleteBook, { isSuccess: success }] = useDeleteBookMutation()
    const { token } = useAppSelector(state => state.user)
    const book: IBookResponse = data?.data;
    const formik = useFormik({
        initialValues: {
            review: '',

        },
        onSubmit: async (review) => {
            const reviews = {
                id,
                review,
                token
            }
            postReview(reviews)
            formik.resetForm();

        },
    });

    const handleDelete = () => {
        const info = {
            token,
            id
        }
        deleteBook(info)
    }
    if(success){
        toast.success('Book Deleted Success', {id: 'book'})
        navigate('/books')
    }
    if (isSuccess) {
        console.log(response)
    }
    let formattedDate;
    if (data) {
        const date = new Date(book.publicationDate);


        const monthNames = [
            "January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"
        ];

        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();

        formattedDate = `${day} ${month} ${year}`;


    }

    return (
        <div className='w-4/5 mx-auto my-10'>
            <div>
                <div className='flex items-center'>
                    <div className='h-[600px] w-[800px]'>
                        <Image className='h-full w-full' src={book?.image?.fileUrl} />
                    </div>
                    <div className='p-5'>
                        <Paragraph className='flex items-center text-3xl'>
                            <span className='font-semibold '>Title : </span>
                            {book?.title.slice(0, 30)}
                        </Paragraph>
                        <Paragraph className='flex items-center text-3xl mt-4'>
                            <span className=' font-semibold'>Author : </span>
                            {book?.author?.name}
                        </Paragraph>
                        <Paragraph className='flex items-center text-3xl mt-4'>
                            <span className='font-semibold '>Genre : </span>
                            {book?.genre}
                        </Paragraph>
                        <Paragraph className='flex items-center text-3xl mt-4'>
                            <span className='font-semibold '>Price : </span>
                            {book?.price}
                        </Paragraph>
                        <Paragraph className='flex items-center text-3xl mt-4'>
                            <span className=' font-semibold'>Price : </span>
                            {formattedDate ? formattedDate : book?.publicationDate}
                        </Paragraph>
                        <div className='mt-10 flex items-center'>
                            <Link to={`/update-book/${book?._id}`}><Button>Edit</Button></Link>

                            <button onClick={handleDelete} className='ml-6 font-semibold hover:bg-white hover:border-red-600 hover:border  duration-300 hover:text-black bg-red-600 text-white px-4 py-2 rounded-md'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <Heading className='text-center text-3xl font-bold my-5'>Reviews : {book?.reviews?.length}</Heading>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex my-5 w-3/5 mx-auto">
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-5 rounded-full focus:outline-none focus:border-blue-500"
                        id="review"
                        name="review"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.review}
                        placeholder="Your review"
                    />
                    <button className='ml-2 my-5 font-semibold hover:bg-white border border-[#0874c4] duration-300 hover:text-[#0874c4] bg-[#0874c4] text-white px-4  rounded-lg' type='submit'>review</button>
                </div>
            </form>
            {
                book?.reviews?.length ? <div>
                    {
                        book.reviews.map(review => <Heading>{review}</Heading>)
                    }
                </div> : null
            }
        </div>
    );
};

export default BookDetails;