import Heading from "../components/Heading";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Card from "../components/card/Card";


const Books = () => {
 const books =   [
        {
          "title": "The Great Gatsby",
          "author": "F. Scott Fitzgerald",
          "genre": "Classic",
          "price": 200,
          "image": "https://image.shutterstock.com/image-photo/open-book-on-white-background-260nw-523462210.jpg",
          "publicationDate": "April 10, 1925"
        },
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-4/5 mx-auto my-10">
           {
            books.map(book => <Card book={book} /> )
           }
        </div>
    );
};

export default Books;