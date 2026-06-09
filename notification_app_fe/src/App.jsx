/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  CircularProgress,
} from "@mui/material";
import { sortNotifications } from "./utils/priority";
import NotificationCard from "./components/NotificationCard";
import FilterBar from "./components/FilterBar";
import { fetchNotifications } from "./services/api";

function App() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications = async () => {
    try {
      const data = await fetchNotifications();
      const sorted = sortNotifications(data);
      setNotifications(sorted);
    } catch (error) {
      alert("Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  };

  const filteredNotifications =
    filter === "All"
      ? notifications
      : notifications.filter(
          (item) => item.Type === filter
        );

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Campus Notifications
      </Typography>

      <FilterBar setFilter={setFilter} />

      {loading ? (
        <CircularProgress />
      ) : (
        filteredNotifications.map((item) => (
          <NotificationCard
            key={item.ID}
            notification={item}
          />
        ))
      )}
    </Container>
  );
}

export default App;