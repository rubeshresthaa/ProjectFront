  import image from '../../assets/images/emil-priver-LQsrXtpuqR8-unsplash.jpg'
  import german from '../../assets/images/german.jpg'
  import huskey from '../../assets/images/huskey.jpg'
  import pitbull from '../../assets/images/pitbull.jpg'
  import pug from '../../assets/images/pug.jpg'
  import japanese from '../../assets/images/japanese.jpg'

  import labrador from '../../assets/images/labrador.jpg'

  const Breeds = () => {
    return (
      <div className='p-10 w-9/12 mx-auto'>
        <h1 className="text-3xl font-bold text-center p-5">Breeds</h1>
        <div className="grid grid-cols-4 md:grid-cols-2 justify-center items-center text-center gap-5">
          <div className='flex flex-col justify-center items-center'>
            <h1>Golden Retriver</h1>
            <div>
              <img src={image} className='w-64 h-96' alt="" />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            
            <h1>German Shepard</h1>
            <img src={german} className='w-64 h-96' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Huskey</h1>
            <img src={huskey} className='w-64 h-96' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Pit Bull</h1>
            <img src={pitbull} className='w-64 h-96' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Pug</h1>
            <img src={pug} className='w-64 h-96' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center' >
            <h1 className=''>Labrador</h1>
            <img src={labrador} className='w-64 h-96' alt="" />
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h1>Japanese Spitz</h1>
            <img src={japanese} className='w-64 h-96' alt="" />
          </div>
        </div>
      </div>
    )
  }
  export default Breeds