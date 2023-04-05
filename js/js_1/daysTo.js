function daysTo(date) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const diffInMilliseconds = Math.abs(date.getTime() - this.getTime());
  const diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);

  return diffInDays;
}

Date.prototype.daysTo = daysTo;
