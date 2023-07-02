import { useSelector } from 'react-redux';

const Messages = () => {
  const messages = useSelector((state) => state.messages);
  return (
    <div>
      <pre>
        {JSON.stringify(messages)}
      </pre>
    </div>
  );
};

export default Messages;
