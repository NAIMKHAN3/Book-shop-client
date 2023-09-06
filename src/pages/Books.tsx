import Heading from "../components/Heading";
import Card from "../components/card/Card";
import { useGetBooksQuery } from "../redux/book/bookApi";
import { IBookResponse } from "../types/types";


const Books = () => {
  const { data, isLoading, isSuccess } = useGetBooksQuery("")
  const books: IBookResponse[] = data?.data
  if (isLoading) {
    return <Heading className="text-center text-2xl">Loading...</Heading>;
  }

  if (!isSuccess || !data?.data?.length) {
    return <Heading>No books available</Heading>;
  }
  // const books: any =[]
  return (
    <div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-4/5 mx-auto my-10">
      {
        books?.map((book: IBookResponse) => <Card key={book._id} book={book} />)
      }
    </div>
    </div>
  );
};

export default Books;