// ChatIcon.jsx
import React, { useState, useRef } from 'react';
import './ChatBox.css'; // Ensure styles are imported

const ChatIcon = ({ onClick }) => {
  const [position, setPosition] = useState({ bottom: "20px", right: "20px" });
  const iconRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    const icon = iconRef.current;
    const offsetX = e.clientX - icon.getBoundingClientRect().left;
    const offsetY = e.clientY - icon.getBoundingClientRect().top;

    const onMouseMove = (e) => {
      icon.style.left = `${e.clientX - offsetX}px`;
      icon.style.top = `${e.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      icon.style.left = '';
      icon.style.top = '';
      icon.style.bottom = position.bottom;
      icon.style.right = position.right;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp, { once: true });
  };

  return (
    <div
      ref={iconRef}
      className="chat-icon"
      onClick={onClick}
      onMouseDown={handleDrag}
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "red",
        position: "fixed",
        bottom: position.bottom,
        right: position.right,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        cursor: "pointer",
        zIndex: 1000 // Ensure it stays on top
      }}
    >
      💬
    </div>
  );
};

export default ChatIcon;
