import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'
import avatar3 from '../../assets/avatar3.png'

const Thumbs = () => {
  const thumbs = [
    {
      img: avatar1,
      name: 'Austin',
      rank: 'Plant whisperer'
    },
    {
      img: avatar2,
      name: 'Sophia',
      rank: 'Plant Guru'
    },
    {
      img: avatar3,
      name: 'Olivia',
      rank: 'Plant Enthusiast'
    }
  ]

  return (
    <article className='thumbs-container'>
        <h3>Meet Our Green Thumbs</h3>        
      <div className='thumb-box-container'>
        {
          thumbs.map((thumb, idx) =>
            <div key={idx} className='thumb-box'>
              <img className='thumb-img' src={thumb.img} alt='' />
              <h4 className='thumb-name'>{thumb.name}</h4>
              <p className='thumb-rank'>{thumb.rank}</p>
          </div>)
        }
      </div>
    </article>
  )
}

export default Thumbs
