
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { IBookResponse } from '../../types/types';
import { Link } from 'react-router-dom';

const Card = (props:any) => {
  const book:IBookResponse = props.book

    return (
       <Link to={`/book-details/${book._id}`}>
         <div className=" p-5 rounded-lg shadow-md hover:shadow-xl cursor-pointer">
              <div className='h-96'>
              <Image className="border p-2 rounded-md h-full w-full" src={book.image?.fileUrl} />
              </div>
              <div>
                <Heading className="mt-5 text-xl font-bold">
                <span className="font-bold"> Title:</span>  {book.title.slice(0, 30)}
                </Heading>
                <div className="flex justify-between items-center mt-3">
                <div className=" text-lg">
                <Paragraph className="mt-3">
                  <span className="font-bold"> Genre:</span> {book.genre}
                  </Paragraph>
                  
                  
                </div>
                <div className="text-lg">
                <Paragraph>
                  <span className="font-bold"> Author:</span> {book.author?.name}
                  </Paragraph>
                </div>
                </div>
              </div>
            </div>
       </Link>
    );
};

export default Card;