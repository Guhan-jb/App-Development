import '../Assets/CSS/App.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import { useNavigate } from 'react-router-dom'
const Home=()=>{
    const user=useSelector(selectUser)
    const nav=useNavigate()
    console.log(user)
    const HandleLogin=()=>
    {
        if(user==="null")
        {
        return(
        <div className='h-100 d-flex align-items-center justify-content-center'>
        <button className="btn btn-primary" onClick={HandleLoginbtn}>Login</button>
        </div>
        )
        }
        else{
            return(
                <div className='h-100 d-flex align-items-center justify-content-center'>{user.email}</div>
            )
    }
    }
    const HandleLoginbtn=()=>{
        nav("/login")
    }
    return(
        <>
    {HandleLogin()}
    </>
    )
}
export default Home;
