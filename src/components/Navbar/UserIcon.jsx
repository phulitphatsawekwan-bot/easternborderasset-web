import { CircleUser, CircleUserRound } from 'lucide-react';

const UserIcon = () => {
  const { user } = useUser();

  if(user){
    return <img src={user.imageUrl} />
  }

  return <CircleUserRound />
};
export default UserIcon