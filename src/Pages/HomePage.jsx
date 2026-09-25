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

    // Helper to uncheck drawer checkbox
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
            <div className="drawer z-50">
                <input className="drawer-toggle" id="my-drawer" type="checkbox" />
                
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer inline-block">
                        <FiMenu
                            size={"32px"}
                            className='font-bold text-white m-4'
                        />
                    </label>
                </div>

                <div className="drawer-side">
                    <label htmlFor='my-drawer' className='drawer-overlay'></label>
                    <ul className="menu p-4 w-48 min-h-full sm:w-80 bg-slate-800 text-white relative">

                        <li className='w-fit absolute right-2 top-2 z-50'>
                            <button onClick={hideDrawer}>
                                <AiFillCloseCircle size={24} />
                            </button>
                        </li>

                        <li className="mt-8">
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
                            <li className="absolute bottom-4 left-4 right-4">
                                <div className="w-full flex items-center justify-center gap-2">
                                    <button className='bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-semibold rounded-md w-full'>
                                        <Link to="/login" onClick={hideDrawer}> Login </Link>
                                    </button>

                                    <button className='border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 px-4 py-2 font-semibold rounded-md w-full'>
                                        <Link to="/signup" onClick={hideDrawer}> Sign up</Link>
                                    </button>
                                </div>
                            </li>
                        )}

                        {isLoggedIn && (
                            <li className="absolute bottom-4 left-4 right-4">
                                <div className="w-full flex items-center justify-center gap-2">
                                    <button className='bg-yellow-500 text-black px-4 py-2 font-semibold rounded-md w-full'>
                                        <Link to="/user/profile" onClick={hideDrawer}> Profile </Link>
                                    </button>

                                    <button className='border border-yellow-500 text-yellow-500 px-4 py-2 font-semibold rounded-md w-full' onClick={handleLogout}>
                                        Logout
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