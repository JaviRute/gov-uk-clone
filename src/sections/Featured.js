//We import the images used
import img1 from '../images/featured1.png'
import img2 from '../images/featured2.png'
import img3 from '../images/featured3.png'

//No props or state in this component
//This is the section with the 3 images, around the middle of the page
const Featured = () => {
    return (
        <div className="featured-section">
            <h2>Featured</h2>
            <div className="featured-div">
                    <div>
                        <a href="https://www.gov.uk/government/topical-events/autumn-statement-2022">
                            <img src={img1}></img>
                            <h3>Autumn Statement 2022</h3>
                        </a>
                        <p>Find out about the Chancellor of the Exchequer's Autumn Statement.</p>
                    </div>
                    <div>
                        <a href="https://www.nhs.uk/conditions/vaccinations/flu-influenza-vaccine/">
                            <img src={img2}></img>
                            <h3>Flu and COVID-19 vaccines</h3>
                        </a>
                        <p>Check if you can get a free flu vaccine and COVID-19 booster.</p>
                    </div>
                    <div>
                        <a href="https://www.gov.uk/guidance/cost-of-living-payment">
                            <img src={img3}></img>
                            <h3>Cost of Living Payment</h3>
                        </a>
                        <p>Find out payment dates and how to report if it's missing.</p>
                    </div>
            </div>
        </div>
    )
};

export default Featured;