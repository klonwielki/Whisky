function Home(){
    return(
        <div className='Whiskies'>
            <ol>
                <li>Home page</li>
                <ul>
                    <li>A welcome page with basic information about the app.</li>
                </ul>
                <li>Episodes pages</li>
                <ul>
                    <li>Displays a list of episodes from the Final Space API.</li>
                    <li>Users can search for episodes by entering an episode number.</li>
                    <li>Displays loading indicators when data is being fetched.</li>
                    <li>Error handling for invalid or missing data.</li>
                </ul>
                <li>Responsive Navbar</li>
                <ul>
                    <li>Navigation between the Home and Episodes pages.</li>
                </ul>
                <li>Dynamic Episode Filtering</li>
                <ul>
                    <li>Users can filter and display a single episode based on its number.</li>
                    <li>Default behavior displays all episodes when no specific episode is searched.</li>
                </ul>
            </ol>
        </div>
    )
}
export default Home