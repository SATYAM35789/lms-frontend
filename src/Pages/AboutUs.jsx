import CarouselSlide from "../Components/CarouselSlide";
import HomeLayout from "../Layouts/HomeLayout";
import { celebrities } from "../Constants/CelebrityData";


function AboutUs() {

    return (
        <HomeLayout>
            <div className="pl-20 flex flex-col text-white">
                <div className="flex items-center gap-5 mx-10">
                    <section className="w-1/2 space-y-10">
                        <h1 className="text-5xl text-yellow-500 font-semibold">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200 " >
                            Our goal is to provide affordable and quality edcation to world.
                            We are providing for the aspiring and teachers and students to share
                            their knpwledge, skills, and crativity to each other.
                        </p>
                        <div className="w-1/2">
                            <img
                                id="test1"
                                style={{

                                    filter: "drop-shadow(0px 10px 10px rgba(0, 0, 0 ));"
                                }}

                                className="drop-shadow-2xl"
                                src={images} alt="About Us Page"
                            />
                        </div>

                    </section>
                </div>

                <div className="carousel w-1/2 my-17 m-auto">
                    {celebrities && celebrities.map(celebrity => (<CarouselSlide
                        {...celebrity}
                        key={celebrity.slideNumber}
                        totalSlides={celebrities.length}
                    />))}
                    <CarouselSlide />

                </div>
            </div>
        </HomeLayout>
    )

}
export default AboutUs;