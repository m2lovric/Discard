import logo from '../assets/icons8-discord-new-48.svg';
import ButtonNav from './ButtonNav';

const Navi = () => {
  return (
    <nav className='w-20 h-full bg-gray-800'>
      <ul className='list-none w-full flex flex-col items-center my-5 '>
        <button className='bg-indigo-600 rounded-2xl w-14 h-14 flex items-center justify-center'>
          <img src={logo} alt='logo' className='w-9 h-9' />
        </button>
        <ButtonNav path={logo} alt='logo' />
        <ButtonNav path={logo} alt='logo' />
      </ul>
    </nav>
  );
};

export default Navi;
