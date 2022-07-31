interface ButtonProps {
  path: string;
  alt: string;
}

const ButtonNav = ({ path, alt }: ButtonProps) => {
  return (
    <button className='bg-zinc-700 mt-5 w-12 h-12 flex items-center justify-center hover:bg-green-600 rounded-full hover:rounded-2xl transition-all duration-300 ease-linear'>
      <img src={path} alt={alt} className='w-8 h-8' />
    </button>
  );
};

export default ButtonNav;
