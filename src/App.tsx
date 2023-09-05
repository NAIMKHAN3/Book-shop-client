import MainLayout from "./layout/MainLayout"
import { useAppDispatch } from "./redux/hook"
import { userSet } from "./redux/user/userSlice"

function App() {
  const dispatch = useAppDispatch()
const userStringify = localStorage.getItem('user')
if(userStringify){
  const user = JSON.parse(userStringify)
  dispatch(userSet(user))
}
  return (
    <>
    <MainLayout/>
    </>
  )
}

export default App
