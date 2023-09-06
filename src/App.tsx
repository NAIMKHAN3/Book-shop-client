import MainLayout from "./layout/MainLayout"
import { useAppDispatch } from "./redux/hook"
import { userSet } from "./redux/user/userSlice"
import { Toaster } from 'react-hot-toast';

function App() {
  const dispatch = useAppDispatch()
const userStringify = localStorage.getItem('user')
if(userStringify){
  const user = JSON.parse(userStringify)
  dispatch(userSet(user))
}
  return (
    <>
    <Toaster />
    <MainLayout/>
    </>
  )
}

export default App
