import { useState } from 'react'
import './whiskies.css'
import Whisky from './Whisky'

function Whiskies(){
    const [whiskies,setWhiskies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://whiskyhunter.net/api/auction_data/${searchTerm}/`)
            if(!response.ok)
                throw new Error("Failed to fetch data")

            const result = await response.json()
            console.log(result.Search)
            setWhiskies(result.Search)
            setIsLoading(false)
        }
        catch(error) {
            console.log(error)
        }
    }

    const handleSearch = () => {
        fetchData()
    }

    return(
        <div className='Whiskies'>
            {/*isLoading && <Loading/>*/}
            <h1>Whiskies</h1>
            <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
            <button onClick={handleSearch}>Search</button>
            {
                whiskies.map((whisky, index) => 
                    <Whisky key={index} param={whisky}/>
                )
            }
        </div>
    )
}
export default Whiskies