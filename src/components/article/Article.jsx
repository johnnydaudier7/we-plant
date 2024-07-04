import { NavLink } from "react-router-dom"
import Button from "../button/Button"

const Article = ({heading, text, imgUrl, buttonText, className}) => {
    return (
        <article>
            <div className={className}>
            <div className='article-text'>
                <h2>{heading}</h2>
                <p>{text}</p>
                {buttonText && <NavLink to='/All'><Button buttonText={buttonText}></Button></NavLink> }
            </div>
            {imgUrl && <img src={imgUrl} alt='' />}
            </div>
        </article>
    )
}
export default Article