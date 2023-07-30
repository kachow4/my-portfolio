import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className='flex flex-col text-center text-xs p-2 min-w-[320px] tablet:text-sm tablet+:p-5 laptop:text-base'>
        <span>Thanks for visiting!</span>
        <span>Powered by fancy caffeinated drinks <FontAwesomeIcon icon={faMugSaucer}></FontAwesomeIcon></span>

    </div>
  );
};