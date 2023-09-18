import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from "next/dynamic";
import { BsArrowUpRight } from "react-icons/bs";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
const Nav = dynamic(() => import("../pages/components/header"), {
    loading: () => <p>Loading...</p>,
});

export default function index() {
    const slider = useRef();
    const next = () => {
        slider.current.slickNext();
    };
    const previous = () => {
        slider.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='container-fluid header-color header-background header-background-image '>
                <Nav />
                <div className='align-items-start text-white head-content'>
                    <div className=' fs-1'>
                        World-Class {" "}
                        <span className='aqua'>
                            Digital Products
                        </span>
                    </div>
                    <div className='fs-1'>
                        On-Time. On-Budget. On-Point.
                    </div>
                    <div className='fs-6'>
                        We design, develop, and deliver top-notch digital solutions for you.
                    </div>
                    <button class="btn aqua-background text-white font-bold mt-3 " aria-pressed="false" type="submit">Schedule a Call
                        <BsArrowUpRight />
                    </button>
                </div>
            </div>

            <div class="container">
                <div class="row my-4">
                    <div class="col-sm m-3">
                        <div className='aqua'>
                            Company
                        </div>
                        <div className='indigo col-9 fs-4 fw-bold'>
                            We’re a tight-knit group of thinkers and makers.
                        </div>
                        <div className="">
                            <img src="/images/image 10.png" class="card-img-top" alt="..."></img>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div class="m-3">
                            <img src="/images/image 11.png" class="card-img-top" alt="..." />
                            <div class="mt-3">
                                <p class="">We believe in collaboration, open and honest communication, and that every team member has a voice. We believe that good people are our greatest asset and the engine of our success. We believe in being there for one another.</p>
                                <a href="#" class="btn indigo-background text-white">Our Culture <BsArrowUpRight /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='indigo'>
                <span className='fw-bold fs-2 mx-3' >
                    Our Services
                </span>
                <ul class="nav nav-pills fs-4 my-3 " >
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Design</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Software</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Product</button>
                    </li>
                </ul>
                <div class="tab-content my-5" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="row row-cols-1 row-cols-md-3 g-4 container">
                            <div class="col ">
                                <div class="card bg-light card-height">
                                    <div>
                                        <img src="/images/mobile-app 1.svg" class="m-3"
                                            alt="Palm Springs Road" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title fs-4 fw-semibold ">Mobile App Design</h5>
                                        <p class="card-text mt-3">
                                            We deliver best in class UI/UX design utilizing a deep understanding of mobile user behaviour and user interface best practices.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card bg-light card-height">
                                    <div>
                                        <img src="/images/mobile-app 1.svg" class="m-3"
                                            alt="Palm Springs Road" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title fs-4 fw-semibold ">Marketing Websites</h5>
                                        <p class="card-text mt-3">
                                            Your landing page will tell your story. The high technical performance will guarantee a frictionless user experience and support your SEO efforts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card bg-light card-height">
                                    <div>
                                        <img src="/images/mobile-app 1.svg" class="m-3"
                                            alt="Palm Springs Road" />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title fs-4 fw-semibold ">Web / SaaS Product</h5>
                                        <p class="card-text mt-3">
                                            Our expertise ranges from enterprise applications to user managed B2C & B2B platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><div class="row row-cols-1 row-cols-md-3 g-4 container">
                        <div class="col ">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Mobile App Design</h5>
                                    <p class="card-text mt-3">
                                        We deliver best in class UI/UX design utilizing a deep understanding of mobile user behaviour and user interface best practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Marketing Websites</h5>
                                    <p class="card-text mt-3">
                                        Your landing page will tell your story. The high technical performance will guarantee a frictionless user experience and support your SEO efforts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Web / SaaS Product</h5>
                                    <p class="card-text mt-3">
                                        Our expertise ranges from enterprise applications to user managed B2C & B2B platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>.</div>
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><div class="row row-cols-1 row-cols-md-3 g-4 container">
                        <div class="col ">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Mobile App Design</h5>
                                    <p class="card-text mt-3">
                                        We deliver best in class UI/UX design utilizing a deep understanding of mobile user behaviour and user interface best practices.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Marketing Websites</h5>
                                    <p class="card-text mt-3">
                                        Your landing page will tell your story. The high technical performance will guarantee a frictionless user experience and support your SEO efforts.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card bg-light card-height">
                                <div>
                                    <img src="/images/mobile-app 1.svg" class="m-3"
                                        alt="Palm Springs Road" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-semibold ">Web / SaaS Product</h5>
                                    <p class="card-text mt-3">
                                        Our expertise ranges from enterprise applications to user managed B2C & B2B platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div></div>
                </div>
            </div>

            <section className='container'>
                <div className='indigo fs-2 fw-bold'>
                    Featured Projects
                </div>
                <div className='my-3 fs-6'>
                    We have a proven track record of building high quality solutions for customers all over the world.
                </div>
                <div class="">
                    <div class="row my-4">
                        <div class="col-sm ">
                            <div className="">
                                <img src="/images/image 7.png" class="card-img-top" alt="..."></img>
                            </div>
                            <div className='indigo my-3 fs-3 fw-semibold'>
                                Company
                            </div>
                            <div className=' col-11 '>
                                This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao....
                            </div>
                        </div>
                        <div class="col-sm ">
                            <div className="">
                                <img src="/images/image 8.png" class="card-img-top" alt="..."></img>
                            </div>
                            <div className='indigo my-3 fs-3 fw-semibold'>
                                Jet Fair
                            </div>
                            <div className=' col-11 '>
                                This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao....
                            </div>
                        </div>
                        <div class="mt-5">
                            <div className="">
                                <img src="/images/image 9.png" class="card-img" alt="..."></img>
                            </div>
                            <div className='indigo my-3 fs-3 fw-semibold'>
                                Company
                            </div>
                            <div className=' col-11 '>
                                This website is operated by Three Aces Curaçao N.V., registered in Curaçao under the number 155000, with the address at Heelsumstraat 51 Curaçao....
                            </div>
                        </div>

                    </div>
                </div>

            </section>
















        </div>
    )
}
