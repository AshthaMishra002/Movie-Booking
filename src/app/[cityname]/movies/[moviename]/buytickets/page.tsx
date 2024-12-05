"use client"
import React from 'react'
import DatePicker from "react-horizontal-datepicker";
import './BuyTicketsPage.css'
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation'

const page = () => {
    const pathname = usePathname()

    const movie = {
        moviename: "Inception",
        genre: "Science Fiction/Action",
        releaseDate: "2010-07-16",
        rating: 8.8,
        duration: "2h 28m",
        description: "A skilled thief, the absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
        director: "Christopher Nolan",
      screens: [
          {
           
            name: "Screen 1",
            location: {
              mallName: "GT Central Mall",
              address: "Malviya Nagar, Jaipur",
            },
            availableSeats: 30,
          },
          {
           
            name: "Screen 2",
            location: {
              mallName: "Maharaja Mall",
              address: "Vidhyadhar Nagar, Jaipur",
            },
            availableSeats: 25,
          },
          {
            
            name: "Screen 4",
            location: {
              mallName: "World Trade Park",
              address: "Jawahar Lal Nehru Marg, Malviya Nagar, Jaipur",
            },
            availableSeats: 20,
          },
          {
            
            name: "Screen 3",
            location: {
              mallName: "Elements Mall",
              address: "Ajmer Road, Jaipur",
            },
            availableSeats: 15,
          },
          {
            
            name: "IMAX Screen",
            location: {
              mallName: "Crystal Palm",
              address: "Sardar Patel Marg, C-Scheme, Jaipur",
            },
            availableSeats: 10,
          },
        ],
    }

    const selectedDay = (val: any) =>{
        console.log(val)
    };
 
  return (
    <div className='buytickets'>
        <div className='s1'>
            <div className="head">
                <h1>{movie.moviename} - {movie.releaseDate}</h1>
                <h3>{movie.genre}</h3>
            </div>
            <DatePicker getSelectedDay={selectedDay}
                  endDate={100}
                  selectDate={new Date("2020-04-30")}
                  labelFormat={"MMMM"}
                  color={"rgb(248, 68, 100)"}          
/>
        </div>
        <div className='screens'>
            {
                movie.screens.map((screen, index)  => {
           
                return(
                    <div className="screen" key={index}>
                        <div>
                            
                            <h2>{screen.name}</h2>
                            <h3>{screen.location.mallName}</h3>
                            <p>{screen.location.address}</p>
                        </div>
                        <Link href={`${pathname}/${screen.name}`} className='theme_btn1 linkstylenone'>
                        Select

                        </Link>
                    </div>
                )
            })
            }
        </div>
    </div>
  )
}

export default page
