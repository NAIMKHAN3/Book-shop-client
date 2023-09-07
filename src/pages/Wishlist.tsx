
import { useEffect } from 'react';
import toats from 'react-hot-toast'
import Heading from '../components/Heading';
import Image from '../components/Image';
import Paragraph from '../components/Paragraph';
import { useAppSelector } from '../redux/hook';
import { useDeleteWishlistMutation, useGetWishlistQuery } from '../redux/wishlist/wishlistApi';

const Wishlist = () => {
    const { token } = useAppSelector(state => state.user)
    const { data, isLoading } = useGetWishlistQuery(token)
    const [deleteWishlist, { isSuccess, }] = useDeleteWishlistMutation()

    if (isLoading) {
        return <Heading className="text-center text-2xl">Loading...</Heading>;
    }
    const wishlists = data?.data;
    console.log(wishlists)
    const handleDelete = (id: string) => {
        const data = {
            id,
            token
        }
        deleteWishlist(data)
    }
    if (isSuccess) {
        toats.success('Wishlist deleted', { id: 'wishlist' })
    }
    // useEffect(() => {
    //     if (isSuccess) {
    //         toats.success('Wishlist deleted', { id: 'wishlist' })
    //     }
    // }, [isSuccess])
    return (
        <div>
            <Heading className='text-center text-3xl font-semibold mt-10'>Wishlist: {wishlists.length}</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 w-4/5 mx-auto my-10'>
                {
                    wishlists.map((wishlist: any) => <div className='border-2 p-5 flex '>
                        <div className='w-52 h-52'>
                            <Image className='w-full h-full' src={wishlist?.bookId?.image?.fileUrl} />
                        </div>
                        <div className='ml-4'>
                            <Heading className="mt-5 text-xl font-bold">
                                <span className="font-bold"> Title:</span>  {wishlist?.bookId?.title.slice(0, 30)}
                            </Heading>
                            <div className="flex justify-between items-center mt-3">
                                <div className=" text-lg">
                                    <Paragraph>
                                        <span className="font-bold"> Author:</span> {wishlist?.bookId?.author?.name}
                                    </Paragraph>
                                    <Paragraph className="mt-3">
                                        <span className="font-bold"> Publication Date:</span> {wishlist?.bookId?.publicationDate}
                                    </Paragraph>

                                </div>
                                <div className="text-lg">
                                    <Paragraph className="">
                                        <span className="font-bold"> Price:</span> {wishlist?.bookId?.price}
                                    </Paragraph>
                                    <Paragraph className="mt-3">
                                        <span className="font-bold"> Genre:</span> {wishlist?.bookId?.genre}
                                    </Paragraph>
                                </div>

                            </div>
                            <div className='flex justify-end'>
                                <button onClick={() => handleDelete(wishlist?._id)} className='ml-4 font-semibold hover:bg-white border-red-500 border  duration-300 hover:text-black bg-red-600 text-white px-2 py-2 rounded-md mt-5'>Wishlist Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Wishlist;