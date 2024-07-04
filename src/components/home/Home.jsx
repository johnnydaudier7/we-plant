import { NavLink } from 'react-router-dom'
import Thumbs from './Thumbs'
import homeImgFromLocal from '../../assets/home.jpeg'
import articleImg from '../../assets/article1.jpeg'
import article2Img from '../../assets/article2.jpeg'
import Article from '../article/Article'
import FAQs from '../faqs/Faqs'
import Button from '../button/Button'

const Home = () => {
  
  const firstArticle = {
    h2: 'Discover Our Exotic Collection of Indoor Plants',
    p: 'Bring nature into your home with our diverse selection of plants perfect for city dwellers and indoor enthusiasts.',
    img: { url: articleImg },
    buttonText: 'shop now',
    class: 'article-content' 
  }
  const secondArticle = {
    h2: 'Your Green Oasis Awaits: Bestsellers to Inspire',
    p: 'Let your indoor jungle grow with popular favorites like succulents, snake plants, and more all nurtured with love.',
    img: { url: article2Img },
    class: 'article-content-reversed'    
  }
  const readyToArticle = {
    h3: 'Ready to cultivate your very own green sanctuary? Begin the adventure today!',
    links: [{
      path: '/All',
      buttonText: 'Explore Plants'
    },
    {
      path: '/care-guides',
      buttonText: 'Learn More' 
    }]
  } 

  return (
    <>       
      <div className='we-plant'>        
        <div className='we-plant-info-container'>
          <h1>WE PLANT</h1>
          <p>Discover a wide variety of exotic plants and customized care to transform your home into a green oasis.</p>
          <div className='we-plant-buttons-container'>
           <Button buttonText={'view all'}/>
           
           <Button buttonText={'care guides'}/>
          </div>       

           
        </div>       
      </div>

      <Article 
      heading={firstArticle.h2}
      text={firstArticle.p}
      buttonText={firstArticle.buttonText}
      imgUrl={firstArticle.img.url}
      className={firstArticle.class}
      />
      <Article 
      heading={secondArticle.h2}
      text={secondArticle.p}
      imgUrl={secondArticle.img.url}
      className={secondArticle.class}
      />

      <div className='ready-to-container'>
        <div className='ready-to-text'>
          <h3>{readyToArticle.h3}</h3>
        </div>
        <div className='ready-to-btn-group'>
          {readyToArticle.links.map(link => 
          <NavLink key={link.path} to={link.path}>
            <Button buttonText={link.buttonText}/> 
          </NavLink>)}          
        </div>
      </div>

      <Thumbs/>
      <FAQs/>
    </>
  )
}

export default Home
