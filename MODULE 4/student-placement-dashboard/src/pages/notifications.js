import { useEffect, useState } from "react";

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/notifications")
      .then((response) => response.json())
      .then((data) => {
        setNotifications(data);
      });
  }, []);

  return (
    <div className="page">

      <h1>Notifications</h1>

      {notifications.map((notification) => (
        <div
          className="notification-card"
          key={notification.id}
        >

          <h3>🔔 {notification.type}</h3>

          <p>{notification.message}</p>

        </div>
      ))}

    </div>
  );
}

export default Notifications;