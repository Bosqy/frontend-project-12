import { useSelector } from 'react-redux';

const Channels = () => {
  const { channels, currentChannelId } = useSelector((state) => state.channels);

  return (
    <div>
      <pre>
        {JSON.stringify(channels, null, 2)}
      </pre>
      <pre>
        <span>Активный канал: </span>
        {currentChannelId}
      </pre>
    </div>
  );
};

export default Channels;
