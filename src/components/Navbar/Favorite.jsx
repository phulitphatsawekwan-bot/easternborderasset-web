import { Link } from 'react-router';
import { Button } from '../ui/button';
import heart from "@/assets/White-Heart-icon.png";

const Favorite = () => {
  return (
    <Button className='hidden md:block flex mb-2 items-center justify-center bg-transparent shadow-none hover:bg-transparent'>
        <Link to='/user/myfavorites'><img src={heart} width={30} /></Link>
    </Button>
  )
}
export default Favorite