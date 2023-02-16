
import Map from './Map'
import SearchBox from './SearchBox'
import useInput from './UseInput'
 
function Yopage() {

  return (

    
        
        <div className='flex justify-center items-center lg:p-5 bg-geo bg-[#09090b]'>
        <div className="absolute items-center justify-center w-full z-10 p-4 max-w-3xl">
        <h1 className='font-bold text-xl text-black'>Where do you work?</h1>
        <div className='absolute w-full'>
        <SearchBox />
        </div>
        </div>
        <section className='h-[50rem] w-full max-w-6xl'>
        {/* <Map/> */}
        </section>
        <div>           
        </div>
        </div> 
  )
};

export default Yopage;