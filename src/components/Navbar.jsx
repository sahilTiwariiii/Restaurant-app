import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useCart} from '../components/ContextReducer'
import Badge from 'react-bootstrap/Badge'
import Cart from '../screens/Cart'
import Modal from '../Model'


const Navbar = (props) => {
    let data=useCart()
    const [cartView, setCartView] = useState(false)
    const navigate=useNavigate()
    const handleLogout=()=>{
    localStorage.removeItem("authtoken")
    navigate('/login')
    }
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                    <Link className="navbar-brand fs-1 fst-italic bold go " to="/">GoFood</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2">
                            <li className="nav-item active ">
                                <Link className="nav-link active fs-5 " to="/">Home<span className="sr-only">(current)</span></Link>
                            </li>
                            {(localStorage.getItem("authtoken")) ?
                                <li className="nav-item ">
                                    <Link className="nav-link active fs-5 " to="/myOrder">My Oders
                                   
                                    <span className="sr-only">(current)</span></Link>
                                </li> 
                                : ""}


                        </ul>
                        {(!localStorage.getItem("authtoken")) ?

                            <div className='d-flex' >
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>


                                <Link className="btn bg-white text-success mx-1" to="/createuser">Signup</Link>
                            </div>
                            :
                            <div>
                            <div className='btn bg-white text-success mx-2' onClick={()=>setCartView(true)} >My Cart {" "}
                            <Badge pill bg='danger'>{data.length}</Badge>
                            </div>
                            {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal>:null}
                            <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>Logout</div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar