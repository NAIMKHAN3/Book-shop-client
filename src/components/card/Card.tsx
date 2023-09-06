
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const Card = (props:any) => {

    return (
        <div className=" p-5 rounded-lg shadow-lg">
              <Image className="border p-2 rounded-md" src={props.book.image} />
              <div>
                <Heading className="mt-5 text-xl font-bold">
                <span className="font-bold"> Title:</span>  {props.book.title}
                </Heading>
                <div className="flex justify-between items-center mt-3">
                <div className=" text-lg">
                  <Paragraph>
                  <span className="font-bold"> Author:</span> {props.book.author}
                  </Paragraph>
                  <Paragraph className="mt-3">
                  <span className="font-bold"> Publication Date:</span> {props.book.publicationDate}
                  </Paragraph>
                  
                </div>
                <div className="text-lg">
                <Paragraph className="">
                  <span className="font-bold"> Price:</span> {props.book.price}
                  </Paragraph>
                  <Paragraph className="mt-3">
                  <span className="font-bold"> Genre:</span> {props.book.genre}
                  </Paragraph>
                </div>
                </div>
              </div>
            </div>
    );
};

export default Card;