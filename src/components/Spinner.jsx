import spinner from '../assets/loader.gif'

function Spinner() {
    return (
      <div className='mt-20 select-none'>
        <img
          width={120}
          className='text-center mx-auto'
          src={spinner}
          alt='Loading...'
        />
      </div>
    )
  }
  
  export default Spinner
  