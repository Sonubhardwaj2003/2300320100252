const priorityWeight = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortNotifications = (notifications) => {
  return notifications
    .sort((a, b) => {
      const priorityDiff =
        priorityWeight[b.Type] - priorityWeight[a.Type];

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return new Date(b.Timestamp) - new Date(a.Timestamp);
    })
    .slice(0, 10);
};