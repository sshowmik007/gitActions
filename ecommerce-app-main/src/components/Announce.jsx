import React,{useState} from 'react'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const Announce = () => {
    const [announceStyle,setAnnounceStyle] = useState('bg-purple-600  text-white flex items-center justify-center space-x-2 font-bold')
    

    const handleClose = () => {
        setAnnounceStyle(announceStyle + " hidden ");
    }

    return (
    <div className=  {announceStyle}  >
        <h2>Hurry up it's 40% sales happening!!!!!!!!</h2>
        <CloseRoundedIcon className='cursor-pointer' onClick={handleClose} />
    </div>
  );
};

export default Announce;