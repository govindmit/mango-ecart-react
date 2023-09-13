import './style.css'
const Banner = (props) =>{
const data =props.data;
return(
    <div className="banner-container">
        <div className='banner-data'> 
            <h1>{data}</h1>
        <h4>HOME / {data}</h4>
        </div>
    </div>
)

}

export default Banner ;