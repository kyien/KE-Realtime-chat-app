import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/chatfeed';
import LoginForm from './components/LoginForm';
import './App.css';

const projectID = 'b0807d9c-d0c3-40fc-88ad-d0b3775c7675';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;