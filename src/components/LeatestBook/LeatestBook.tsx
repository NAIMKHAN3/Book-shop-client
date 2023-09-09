
import Heading from '../Heading';
import { useGetLeatestBookQuery } from '../../redux/book/bookApi';
import { IBookResponse } from '../../types/types';
import Card from '../card/Card';

const LeatestBook = () => {
    const { data, isLoading } = useGetLeatestBookQuery("")
    if (isLoading) {
        return <Heading className="text-center text-2xl">Loading...</Heading>;
    }
    const books = data?.data;
    return (
        <div>
            <Heading className='text-center text-3xl font-semibold mt-10'>Leatest Book</Heading>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-4/5 md:mx-auto mx-3 my-10">
                {
                    books?.map((book: IBookResponse) => <Card key={book._id} book={book} />)
                }
            </div>
        </div>
    );
};

export default LeatestBook;