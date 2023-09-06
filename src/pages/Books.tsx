import { useFormik } from "formik";
import Heading from "../components/Heading";
import Card from "../components/card/Card";
import { useGetBooksQuery } from "../redux/book/bookApi";
import { IBookResponse } from "../types/types";
import Input from "../components/Input";


const Books = () => {
  const { data, isLoading, isSuccess } = useGetBooksQuery("")
  const books: IBookResponse[] = data?.data
  if (isLoading) {
    return <Heading className="text-center text-2xl">Loading...</Heading>;
  }

  if (!isSuccess || !data?.data?.length) {
    return <Heading>No books available</Heading>;
  }
  const formik = useFormik({
    initialValues: {
        search: '',

    },
    onSubmit: async (search) => {
console.log(search)
        formik.resetForm();

    },
});
  return (
    <div>
 <form onSubmit={formik.handleSubmit}>
                <div className="flex my-5 w-3/5 mx-auto">
                    <Input
                        className="border-2 border-gray-400 w-full px-2 py-3 my-5 rounded-full focus:outline-none focus:border-blue-500"
                        id="search"
                        name="search"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.search}
                        placeholder="Search"
                    />
                    <button className='ml-2 my-5 font-semibold hover:bg-white border border-[#0874c4] duration-300 hover:text-[#0874c4] bg-[#0874c4] text-white px-4  rounded-lg' type='submit'>Search</button>
                </div>
            </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-4/5 mx-auto my-10">
      {
        books?.map((book: IBookResponse) => <Card key={book._id} book={book} />)
      }
    </div>
    </div>
  );
};

export default Books;