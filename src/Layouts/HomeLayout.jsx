import { FiMenu } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useDispatch, useSelector } from 'react-redux';

function HomeLayout({ children }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Check auth status
    const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
    const role = useSelector((state) => state?.auth?.role);

    // Helper to uncheck drawer checkbox when a user clicks close or navigates
    function hideDrawer() {
        const element = document.getElementById("my-drawer");
        if (element) {
            element.checked = false;
        }
    }

    function handleLogout(e) {
        e.preventDefault();
        hideDrawer();
        // dispatch(logout());
        navigate("/");
    }

    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 z-50 w-fit">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative">
                        <FiMenu
                            size={"32px"}
                            className='font-bold text-white m-4'
                        />
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor='my-drawer' className='drawer-overlay'></label>
                    <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">

                        <li className='w-fit absolute right-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>

                        <li>
                            <Link to={"/"} onClick={hideDrawer}> Home </Link>
                        </li>

                        {isLoggedIn && role === 'ADMIN' && (
                            <li>
                                <Link to="/admin/dashboard" onClick={hideDrawer}>Admin Dashboard</Link>
                            </li>
                        )}

                        <li>
                            <Link to={"/courses"} onClick={hideDrawer}> All Courses </Link>
                        </li>

                        <li>
                            <Link to={"/contact"} onClick={hideDrawer}> Contact us </Link>
                        </li>

                        <li>
                            <Link to={"/about"} onClick={hideDrawer}> About us </Link>
                        </li>

                        {!isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center gap-2">
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/login" onClick={hideDrawer}> Login </Link>
                                    </button>

                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/signup" onClick={hideDrawer}> Sign up</Link>
                                    </button>
                                </div>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="absolute bottom-4 w-[90%]">
                                <div className="w-full flex items-center justify-center gap-2">
                                    <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link to="/user/profile" onClick={hideDrawer}> Profile </Link>
                                    </button>

                                    <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                                        <Link onClick={handleLogout}> Logout</Link>
                                    </button>
                                </div> 
                            </li>
                        )}

                    </ul>
                </div>
            </div>

            {children}

            <Footer />
        </div>
    );
}

export default HomeLayout;