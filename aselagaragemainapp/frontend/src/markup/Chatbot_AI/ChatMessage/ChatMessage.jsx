import Chatboticon from "../Chatbot_Icon/Chatbot_icon";
const chatMessage = ({ chat }) => {
  return (
    !chat.hideInChat && (
      <div
        className={`message ${chat.role === "model" ? "bot" : "user"}-message`}
      >
        {chat.role === "model" && <Chatboticon />}
        <p className="message-text">{chat.text}</p>
      </div>
    )
  );
};

export default chatMessage;
