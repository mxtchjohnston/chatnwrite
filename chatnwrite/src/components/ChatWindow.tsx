import Image from "next/image";
import { Panel, PanelGroup } from "react-resizable-panels";

export default function ChatWindow() {
  return (
    <div className="mx-2">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">
          Delivered
        </div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">
          Seen at 12:46
        </div>
      </div>
    </div>
  );
};

// Chat component
// accepts user, text, time, left | right
// Breaks down into chat text, chat time, chat user
/*
function Chat(props) {
  return (<div className="chat">
    <Avatar />
    <ChatHeader />
    <ChatBubble />
    <ChatFooter />
  </div>)
}

function Avatar(props) {
  const { img } = props;
  return (<div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <Image alt="Tailwind CSS chat bubble component" src={img} />
    </div>
  </div>)
}

function ChatHeader(props) {
  return (<div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>)
}

function ChatBubble(props) {
  return (<div className="chat-bubble">You were the Chosen One!</div>)
}

function ChatFooter(props) {
  return (<div className="chat-footer opacity-50">
    Delivered
  </div>)
}
*/