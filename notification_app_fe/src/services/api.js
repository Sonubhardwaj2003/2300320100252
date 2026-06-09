// import axios from "axios";

// export const fetchNotifications = async () => {
//   try {
//     const response = await axios.get(
//       "/api/evaluation-service/notifications"
//     );

//     return response.data.notifications;
//   } catch (error) {
//     console.log("API Error:", error);

//     return [];
//   }
// };

export const fetchNotifications = async () => {
  return [
    {
      ID: "1",
      Type: "Placement",
      Message: "Microsoft Hiring",
      Timestamp: "2026-04-22 17:51:18",
    },
    {
      ID: "2",
      Type: "Result",
      Message: "Mid Sem Result",
      Timestamp: "2026-04-22 17:50:54",
    },
    {
      ID: "3",
      Type: "Event",
      Message: "Farewell Event",
      Timestamp: "2026-04-22 17:50:06",
    },
  ];
};