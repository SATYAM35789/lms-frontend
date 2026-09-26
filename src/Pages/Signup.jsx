import { BsPersonCircle } from "react-icons/bs";
import HomeLayout from "../Layouts/HomeLayout"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast} from "react-hot-toast";
import { createAccount } from "../Redux/Slices/AuthSlice";
import { isEmail, isValidPassword } from "../Helpers/regexMatcher";

function Signup (){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [previewImage, setPreviewImage] = useState("");
    const [signupData, setSignupData] = useState({
        fullName : " ",
        email : "",
        password: "",
        avatar : ""
    })

    function handleUserInput(e){
        const { name, value } = e.target;
        setSignupData({
            ...signupData,
            [name] : value
        })
    }

    function getImagePreview(event){
        event.preventDefault();

        // Fetching the uploaded image 
        const uploadedImage = event.target.files[0];

        if(uploadedImage){
            setSignupData({
                ...signupData,
                avatar: uploadedImage
            });

            const fileReader = new FileReader() // go to filereader mdn documentation for more info
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load", function(){
                log("FileReader result:", this.result); // Log the result for debugging
                setPreviewImage(this.result)
            })
        }

    }

    async function createNewAccount(event){
        event.preventDefault();  // by default form submission will refresh the page, we prevent that behavior here.
        // Here we can handle the form submission logic, such as sending the signupData to your backend API.
        
        if(!signupData.fullName || !signupData.email || !signupData.password || !signupData.avatar) {
            toast.error("Please fill in all fields and upload an avatar.");
            return;
        }

        // Checking the name field leghth
        if(signupData.fullName.length < 5){
            toast.error("Full name must be at least 5 characters long."); 
            return;
         }

        //  Email validation using regex 
        if(!isEmail(!signupData.email)){
            toast.error("Please enter a valid email address."); 
            return;
        }

        // Password validation using regex
        if(!isValidPassword(!signupData.password)){
            toast.error("Password must be at least 8 characters long and contain at least one letter one special character and one number.");
            return;
        }

        const formData = new FormData(); // You can learn formData vs js object 
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);
        formData.append("avatar", signupData.avatar);

        // dispatch createAccount action with formData
        const response = await dispatch(createAccount(formData));
        if(response?.payload?.success)
             navigate("/"); // Redirect to home page after successful account creation
        
        setSignupData({
            fullName : "",
            email : "",
            password : "",
            avatar : ""
        }) 

        setPreviewImage(""); // Reset the preview image after successful account creation
    }

    return(
        <HomeLayout>
            <div className = "flex items-center justify-center h-[90vh]">
                <form noValidate onSubmit={createNewAccount} className = "flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
                    <h1 className = "text-center text 2xl font-bold"> Registration Page</h1>
                    
                    <label htmlFor="image_uploads" className="cursor-pointer">
                         {previewImage ? (
                            <img className=" w-24 h-24 rounded-full m-auto" src={previewImage} alt="Preview" />
                         ) : (
                            <BsPersonCircle className = "w-24 h-24 rounded-full m-auto"/>
                         )} 
                    </label>
                    <input
                       className="hidden"
                       id="image_uploads"
                       type="file"
                       // accept="image/*"
                       accept=".jpg, .jpeg, .png .svg"
                    />

                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="font-semibold"> Full Name </label>
                        <input 
                        type="text"
                        required
                        name="fullName"
                        id="fullName"
                        placeholder="Enter your full name"
                        className = "bg-transparent px-2 py-1 border" 
                        onChange={handleUserInput}
                        value={signupData.fullName}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-semibold"> Email </label>
                        <input 
                        type="email"
                        required
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        className = "bg-transparent px-2 py-1 border" 
                        onChange={handleUserInput}
                        value={signupData.email}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="password" className="font-semibold"> Password </label>
                        <input 
                        type="password"
                        required
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        className = "bg-transparent px-2 py-1 border" 
                        onChange={handleUserInput}
                        value={signupData.password}
                        />
                    </div>

                    <button type="submit" className="mt-2 bg-yellow-600 hover:bg-yellow-700 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer">
                        Create Account
                    </button>

                    <p className="text-center">
                        Already have an account ? <Link to="/login" className="link text-accent cursor-pointer"> Login </Link>
                    </p>
                </form>
            </div>
        </HomeLayout>
    )
}
export default Signup