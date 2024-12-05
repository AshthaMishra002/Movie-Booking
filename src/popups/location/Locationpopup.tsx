"use client"
import React from 'react'
import '../Popup.css'

const Locationpopup = ({
    setShowLocationPopup
}:{
    setShowLocationPopup: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [cities, setCities] = React.useState<any[]>([])


    const [selectedCity, setSelectedCity] = React.useState<string>("");

    const getcities = async () => {
        const indianCities = [
            "Jabalpur",
            "Mumbai",
            "Delhi",
            "Bangalore",
            "Hyderabad",
            "Chennai",
            "Kolkata",
            "Pune",
            "Ahmedabad",
            "Jaipur",
            "Surat",
            "Lucknow",
            "Kanpur",
            "Nagpur",
            "Indore",
            "Thane",
            "Bhopal",
            "Visakhapatnam",
            "Pimpri-Chinchwad",
            "Patna",
            "Vadodara"
        ];

        const cities = indianCities.map((city) => {
            return {
                label: city,
                value: city
            }

        })

        setCities(cities)
    }
    React.useEffect(()=>{
        getcities()
    }, [])
const handleSave=() =>{
    setShowLocationPopup(false)
}
 
return (
    <div className='popup-bg'>
        <div className='popup-cont'>
        <select
    className='select'
    value={selectedCity}
    onChange={(e) => setSelectedCity(e.target.value)}
  >
    <option value="" disabled>Select your city</option>
    {
      cities.map((city: any) => (
        <option key={city.value} value={city.value}>{city.label}</option>
      ))
    }
  </select>


            <button className='btn'
                onClick={handleSave}
            >Save</button>
        </div>
    </div>
)
}

export default Locationpopup