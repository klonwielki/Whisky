import { useEffect, useState } from 'react';
import './whiskies.css';
import Whisky from './Whisky';
import Loading from "./Loading/Loading"

function Whiskies() {
    const [list, setList] = useState([]);
    const [filtered, setFiltered] = useState([]); 
    const [episode, setEpisode] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await fetch(`https://finalspaceapi.com/api/v0/episode/`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const result = await response.json();
                console.log(result); 
                setList(Array.isArray(result) ? result : [result]);
                setFiltered(Array.isArray(result) ? result : [result]);
            }
            catch (error) {
                console.error("Error loading initial data:", error);
            }
        };

        if (list.length === 0) {
            fetchInitialData();
        }
    }, [list]);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://finalspaceapi.com/api/v0/episode/${episode}`);
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            console.log(result);
            setFiltered(Array.isArray(result) ? result : [result]);
        } catch (error) {
            console.error("Error fetching data:", error);
            setFiltered([]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearch = () => {
        if (episode) {
            fetchData();
        } 
        else {
            setFiltered(list);
        }
    };

    return (
        <div className="Whiskies">
            {isLoading && <Loading/>}
            <h1>Final Space Episodes</h1>
            <input class="Search" type="number" onChange={(e) => setEpisode(Number(e.target.value))} placeholder="Enter episode number (1-23)"/>
            <br/>
            <button class="ButtonSearch" onClick={handleSearch}>Search</button>
            <div className="Content">
            {Array.isArray(filtered) &&
                filtered.map((whisky, index) => (
                    <Whisky key={index} param={whisky} />
                )
                )
            }
            </div>
            
        </div>
    );
}

export default Whiskies;