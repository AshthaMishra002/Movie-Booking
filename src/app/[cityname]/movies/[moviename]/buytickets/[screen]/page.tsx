"use client"
import React from 'react'
import './SelectSeat.css'
import Link from 'next/link'

const Page = () => {

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
    };
 
    const screen = {
        name: "Theatre 1",
        location: " PVR Mall, Jaipur",
        timeslots: [
            {
                time: "10:00 AM",
                seats: [
                    {
                        type: "Standard",
                        price: 500,
                        rows: [
                            {
                                rowName: "A",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "B",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "C",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "D",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "VIP",
                        price: 1000,
                        rows: [
                            {
                                rowName: "E",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowName: "f",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                time: "2:00 PM",
                seats: [
                    {
                        type: "Standard",
                        price: 500,
                        rows: [
                            {
                                rowName: "A",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowName: "B",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "C",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "D",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "VIP",
                        price: 1000,
                        rows: [
                            {
                                rowName: "E",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowName: "F",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },

            {
                time: "6:00 PM",
                seats: [
                    {
                        type: "Standard",
                        price: 500,
                        rows: [
                            {
                                rowName: "A",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Recliner", status: "Available", seat_id: "1" },
                                            { type: "Recliner", status: "Booked", seat_id: "2" },
                                            { type: "Recliner", status: "Available", seat_id: "3" },
                                            { type: "Recliner", status: "Booked", seat_id: "4" },
                                            { type: "Recliner", status: "Available", seat_id: "5" },
                                            { type: "Recliner", status: "Booked", seat_id: "6" },
                                            { type: "Recliner", status: "Available", seat_id: "7" },
                                            { type: "Recliner", status: "Available", seat_id: "8" },
                                            { type: "Recliner", status: "Booked", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "B",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "C",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },

                            {
                                rowName: "D",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Recliner", status: "Available", seat_id: "1" },
                                            { type: "Recliner", status: "Booked", seat_id: "2" },
                                            { type: "Recliner", status: "Available", seat_id: "3" },
                                            { type: "Recliner", status: "Booked", seat_id: "4" },
                                            { type: "Recliner", status: "Available", seat_id: "5" },
                                            { type: "Recliner", status: "Booked", seat_id: "6" },
                                            { type: "Recliner", status: "Available", seat_id: "7" },
                                            { type: "Recliner", status: "Booked", seat_id: "8" },
                                            { type: "Recliner", status: "Booked", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: "VIP",
                        price: 1000,
                        rows: [
                            {
                                rowName: "E",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Booked", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            },
                            {
                                rowName: "F",
                                cols: [
                                    {
                                        seats: [
                                            { type: "Standard", status: "Available", seat_id: "1" },
                                            { type: "Standard", status: "Booked", seat_id: "2" },
                                            { type: "Standard", status: "Available", seat_id: "3" },
                                            { type: "Standard", status: "Available", seat_id: "4" },
                                            { type: "Standard", status: "Booked", seat_id: "5" },
                                            { type: "Standard", status: "Available", seat_id: "6" },
                                            { type: "Standard", status: "Available", seat_id: "7" },
                                            { type: "Standard", status: "Booked", seat_id: "8" },
                                            { type: "Standard", status: "Available", seat_id: "9" }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    };
    
    

    
      
      
    const generateSeatLayout = () => {
        const x = screen.timeslots.findIndex((t: any) => t.time === selectedTime.time);
        return screen.timeslots[x].seats.map((seatType, index) => (
            <div className="seat-type" key={index}>
                <h2>{seatType.type} - Rs. {seatType.price}</h2>
            
            <div className='seat-rows'>
                {
                    seatType.rows.map((row, rowIndex)=>(
                        <div className='seat-rows' key ={rowIndex}>
                              <p className='rowName'>{row.rowName}</p>

                              <div className='seat-cols'>
                                {
                                    row.cols.map((col,colIndex) =>(
                                        <div className="seat-col" key={colIndex}>
                                            {col.seats.map((seat,seatIndex) =>(
                                                <div key={seat.seat_id}>
                                                    {
                                                        seat.status == 'Available'&&
                                                    <span className={
                                                        selectedSeats.find((s: any) =>{
                                                            return s.row === row.rowName && s.seat_id === seat.seat_id && s.col === colIndex 
                                                        }) ? "seat-selected" : "seat-available"
                                                    }
                                                    onClick={() => selectdeselectseat({
                                                        row: row.rowName, // Use row.rowName if that's how the row name is stored
                                                        col: colIndex,
                                                        seat_id: seat.seat_id,
                                                        price: seatType.price
                                                    })}>
                                                        { seat.seat_id}
                                                    </span>
    }
                                                    {
    seat.status === 'Booked' && (
        <span
            className='seat-booked'
           
        >
            {seat.seat_id}
        </span>
    )
}

    
                                                </div>
                                            ))}
                                        </div>
                                    ))
                                }
                              </div>
                        </div>
                    ))
                }
                </div></div>
        ));
    };
    
    const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0]);

    const [selectedSeats, setSelectedSeats] = React.useState<any[]>([
       
    
    ])
    const selectdeselectseat = (seat: any) => {
       console.log(seat)

        const isselected = selectedSeats.find((s:any)=>{
            return s.row === seat.row &&
             s.col === seat.col &&
              s.seat_id === seat.seat_id
        })
//console.log(isselected)

if (isselected) {
    setSelectedSeats(selectedSeats.filter((s: any) => 
       
            s.seat_id !== seat.seat_id
    ))
}

else {
    setSelectedSeats([...selectedSeats, seat])
}
}

    
    
    return (
        <div className='selectseatpage'>
            <div className='s1'>
                <div className="head">
                    <h1>{movie.moviename} - {movie.releaseDate}</h1>
                    <h3>{movie.genre}</h3>
                </div>
            </div>
            <div className="selectseat">
                <div className="timecont">
                    {screen.timeslots.map((time: any, index: number) => (
                        <h3 
                            className={selectedTime.time === time.time ? 'time selected' : 'time'}
                            onClick={() => setSelectedTime(time)}
                            key={index}
                        >
                            {time.time}
                        </h3>
                    ))}
                </div>
                <div className="indicators">
                    <div>
                        <span className='seat-booked'></span>
                        <p>Booked</p>
                    </div>
                    <div>
                        <span className='seat-available'></span>
                        <p>Available</p>
                    </div>
                    <div>
                        <span className='seat-selected'></span>
                        <p>Selected</p>
                    </div>
                </div>
                {generateSeatLayout()}
                <div className="totalcontainer"></div>
            </div>
        </div>
    );
}    
export default Page;