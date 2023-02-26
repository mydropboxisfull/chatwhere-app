
import Map from './Map'
import SearchBox from './SearchBox'
import useInput from './UseInput'
import Typewriter from './Typewriter'
import Footer from './Footer'


const words = ['Walmart Tennessee 3950 Austin P...', 'Publix Florida 10500 Ulmerto...', 'Target Minnesota 900 Nicollet...', 'Best Buy North Dakota 2800 S...', 'Olive Garden Virginia 1603 W...', 'Taco Bell California 1234 Elm St...'];
 
function Yopage() {

  return (

    
        <div>

        <div className='flex justify-center items-center lg:px-5 bg-geo bg-[#09090b] pb-36'>
        <div className="absolute items-center justify-center w-full z-10 p-4 max-w-3xl">
          <div className='justify-center items-start px-20 mr-20'>

        <div>
        <h1 className='font-bold text-5xl text-white text-shadow text-bold py-16 w-3/4 ml-[-2rem] transform -skew-y-6 rotate-3'>chatroom for the workplace.</h1>

        </div>
        </div>
        
        {/* <div className='mb-7 ml-20'>
        <Typewriter words={words} />
        </div> */}




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
        <Footer/>

        </div>


  )
};

export default Yopage;