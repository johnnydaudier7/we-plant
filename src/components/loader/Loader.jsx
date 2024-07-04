const Loader = ({ message }) => {
  const loaderMessage =  message ? message : 'Loading...'
  
  return (
    <div className='loader-container'>
      <div className='loader' />
      <p>{loaderMessage}</p>
    </div>

  )
}

export default Loader
