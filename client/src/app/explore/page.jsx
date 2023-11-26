"use client"

import { useSelector, useDispatch } from "react-redux"
import { getAllArtists } from "../redux/features/artists/artistActions"
import { useEffect, useState } from "react"
import Card from "@/components/card/Card"
import Nav from "@/components/nav/Nav"
import { getAllStyles } from "../redux/features/styles/stylesActions"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation"
import 'swiper/css/pagination';
import { Parallax, Autoplay, Pagination, Navigation } from 'swiper/modules'
import FilterSideBar from "../../components/filterSideBar/FilterSideBar"

export default function ExplorePage() {

    const {people, filtered} = useSelector((state) => state.artists)
   
console.log(filtered,"FILTERED")
   
    const styles = useSelector((state) => state.styles.names)
    const [filters, setFilters] = useState({location: "", tattoStyle: []})

    return (
        <div className="w-full">
        <Nav />
        
        { <div>
            <section className="grid grid-cols-2 text-center h-[300px] ">
                <div className="col-span-1">
                    <h2 className="font-bold text-4xl">Bienvenidos al Reino de la Inspiracion <span className="text-primary">Ink</span>orporada</h2>
                    <p className="text-justify ml-[250px] mt-[50px] w-[600px] text-xl ">
                        En nuestro santuario del arte corporal, cada trazo cuenta una historia, cada línea lleva consigo la esencia de un viaje personal.
                         En el lienzo de la piel, exploramos la intersección entre la imaginación y la realidad, transformando ideas en tatuajes que resuenan con significado.
                        </p>
                </div>
                <div className="col-span-1">
                <Swiper
                     spaceBetween={25}
                     parallax={true}
                     centeredSlides={true}
                     autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      
                      modules={[Parallax, Autoplay, Pagination, Navigation]}
                     className="w-[450px] flex justify-center items-center bg-secondary-100 h-[320px]
                      bg-[url(https://vean-tattoo.es/media/images/Den_rozhd.2e16d0ba.fill-700x320-c0.format-jpeg.jpg)]
                       bg-cover rounded   "
                     >
                        <SwiperSlide className='mt-[150px] font-bold text-xl'>Encuentra la belleza en la simplicidad. Un tatuaje no solo decora tu piel, sino que también cuenta tu historia en las líneas más simples.</SwiperSlide>
                        <SwiperSlide className='mt-[150px] font-bold text-xl'>La poesía de la tinta. Cada tatuaje es una estrofa, cada estrofa es una expresión. ¿Cuál será tu próximo verso?</SwiperSlide>
                        <SwiperSlide className='mt-[150px] font-bold text-xl'>Palabras que perduran. Un tatuaje corto, una vida de significado. Exprésate con precisión, deja que tu piel hable por ti.</SwiperSlide>
                        <SwiperSlide className='mt-[150px] font-bold text-xl'>Menos es más. Descubre la magia de las palabras concisas. Tus tatuajes son recordatorios diarios de lo que realmente importa</SwiperSlide>
                    </Swiper>

                    
                </div>

            </section>
            <hr className="mt-[50px] border-primary ml-[50px] mr-[50px]"></hr>
        </div> }
               
        <div className=" justify-center mt-[75px] mx-4 my-4 flex flex-col lg:flex-row px-4 ">
            <div className=" ">
                 <FilterSideBar />
            </div>
            <div className="gap-x-2 ml-4 lg:w-3/4 w-full ">
                 {/*filtered?.map((filter) => (
                     
                        <Card
                            key={filter.id}
                            name={filter.name}
                            lastName={filter.lastName}
                            location={filter.location}
                            shopName={filter.shopName}
                            tattoos={filter.Publications}
                            image={filter.image}
                        />
                
                 ))*/}
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
                    <div className=" m-5  h-[300px] w-[800px] overflow-hidden bg-secondary-100 rounded shadow-lg  text-white transition-transform transform ">
                        Jared Delgado
                        <img src="https://i.pinimg.com/550x/09/90/fe/0990fe16f61df266c4fc0923bff98c3b.jpg"/>
                    </div>
            </div>
        </div>
        </div>
    )
}