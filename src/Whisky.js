function Whisky({param}){
    return(
        <div>
            <h1>Whisky</h1>
            <h2>{param.auction_name}</h2>
            <p>{param.winning_bid_max}</p>
            <p>{param.winning_bid_min}</p>
            <p>{param.dt}</p>
        </div>
    )
}
export default Whisky