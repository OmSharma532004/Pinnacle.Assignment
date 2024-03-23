import logo from './logo.svg';
import './App.css';
import homeImage from './home.png'
import top from './Top.png'
import design from './design.png'
import arrow from './arrow.png'
import arrow2 from './arrow2.png'
function App() {
  return (
    <div className=" bg-white flex flex-col w-full items-center justify-center">
    {/* Section1 */}
    <div className=' bg-white flex flex-col w-full min-h-screen items-center justify-center'>
      <div className=' p-4 mt-2 mb-[100px]'>
       <img className=' animate-spin-slow' src={top} width={100} alt='logo' />
          </div>
          <div className=' font-mono text-4xl mb-7'>HELLO & WELCOME TO</div>
          <div className=' flex-col flex items-center justify-center'>
            <h1 className='font-mono  text-[150px]  font-extrabold'>Pinnacle</h1>
            <h1 className='font-mono  text-[150px]  font-extrabold'>Solutions</h1>
            <div>
              <img src={homeImage} width={700} alt='logo' />
            </div>

          </div>
          <img className=' animate-pulse mb-[50px]' src={arrow
          } width={100} alt='logo' />

    </div>
     {/* Section2 */}
     <div className=' bg-black p-4 text-white flex flex-col w-full min-h-screen items-center justify-center'>
      
          <div className=' font-mono font-bold text-9xl mt-[100px] mb-7'>Design</div>
        <img src={design} width={400} alt='logo' />
        <p className=' w-[500px] font-semibold'> It's our commitment to delivering more than just services; it's about delivering results. Whether you're a startup with big dreams or an established brand looking for a fresh perspective, we're here to take your digital presence to the next level.

<br></br><br></br><br></br>From web design that combines form and function seamlessly to digital marketing strategies that drive growth, Digital Solutions is your partner in the digital journey. We thrive on challenges, and we're here to guide you through the ever-changing world of digital possibilities.</p>
<img className=' animate-pulse mt-[50px] mb-[50px]' src={arrow2
          } width={100} alt='logo' />
    </div>
   
   
      
    </div>
  );
}

export default App;
