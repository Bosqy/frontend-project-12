import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { setChannel } from '../slices/channelsSlice';

const Channel = ({ isActive, channel }) => {
  const dispatch = useDispatch();
  const handleSetChannel = (id) => dispatch(setChannel(id));
  return (
    <li className="nav-item w-100" key={channel.id}>
      <Button
        variant={isActive ? 'secondary' : ''}
        className="w-100 rounded-0 text-start"
        onClick={() => handleSetChannel(channel.id)}
      >
        <span className="me-1">#</span>
        {channel.name}
      </Button>
    </li>
  );
};

export default Channel;
