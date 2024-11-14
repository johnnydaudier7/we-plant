import { NavLink } from "react-router-dom"
import getPlantsFromStorage from "../../utils/getPlantsFromStorage"

import { useState } from "react"

const CareGuides = () => {
    const plants = getPlantsFromStorage()
    const [message, setMessage] = useState(null)
    

    return(
        <>           
            <div className="care-guides">
                <h1>Care Guides</h1>
                <p>Step into our world of “Care Guides” at We Plant, 
                    where you'll find practical, 
                    personalized tips for caring for your plants. 
                    From basic knowledge to advanced secrets, 
                    we'll guide you every step of the way so you can grow a lush, 
                    healthy garden in your own home.
                </p>
            </div>

            <div className="care-guides-container">
                {plants.map((plant, id) =>
                    <div key={id} className="plant-care-guides-item">
                        <NavLink to={`/care-guides/${plant.id}`}>
                        <div className="plant-care-guides-item-image">
                            <img src={plant.Img} alt={`${plant["Latin name"]} care guide`}/>
                        </div>
                        <div className="plant-care-guides-item-name">
                            {plant["Latin name"]}				
                        </div>
                        </NavLink>
            
                    </div>
                )}
            </div>			  
        </>
        

    )
}
export default CareGuides

 //HACER CONTAINERS Y DEJAR SEPARADA LA LOGICA ACA