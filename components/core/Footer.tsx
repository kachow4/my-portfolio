import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className='flex flex-col text-center p-5'>
        <span>Thanks for visiting!</span>
        <span>Powered by fancy caffeinated drinks <FontAwesomeIcon icon={faMugSaucer}></FontAwesomeIcon></span>

    </div>
  );
};