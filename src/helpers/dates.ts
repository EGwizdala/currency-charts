export const getPreviousWeekDay = (date = new Date(), daysBack = 0) => {
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() - daysBack);
    return previous;
}

export const getDatesInRange = (startDate:Date, endDate:Date) => {
    const date = new Date(startDate.getTime());
    const dates = [];
  
    while (date<= endDate) {
      dates.push(new Date(date).toISOString().slice(0,10));
      date.setDate(date.getDate() + 1);
    }
    return dates;
  }
