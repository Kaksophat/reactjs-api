import "./banner.css"
import image from "../assets/pexels-photo-1536619-removebg-preview (1).png"

const Banner = () => {
  return (
    <>
       <div className="banner-container">
        <div className="banner-content">
            <div className="banner-text">
                <h1 className="banner-title">Summer Sale Collection</h1>
                <p className="banner-subtitle">Discover our latest collection with exclusive deals up to 50% off on selected items.</p>
                <a href="#" className="banner-cta">Shop Now</a>
            </div>
            <div className="banner-image">
            <img src={image} alt="Summer Collection"/>
                <span className="discount-badge">50% OFF</span>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner