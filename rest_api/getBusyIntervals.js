const GOOGLE_CLOUD_API_KEY = '';

const getBusyIntervals = async (calendarId, startTime, endTime) => {
  const url = `https://www.googleapis.com/calendar/v3/freeBusy?key=${GOOGLE_CLOUD_API_KEY}`;
  const data = {
    timeMin: startTime,
    timeMax: endTime,
    items: [{ id: calendarId }],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (!response.ok) {
      const { code, message } = responseData.error;
      throw new Error(`Request code ${code}
      Message: ${message}
      `);
    }

    const isCalendarError =
      responseData.calendars[calendarId].errors?.length > 0;
    if (isCalendarError) {
      throw new Error(
        `Calendar ${calendarId} ${responseData.calendars[calendarId].errors[0].reason}`
      );
    }

    const busyIntervals = responseData.calendars[calendarId].busy;

    return busyIntervals;
  } catch (error) {
    console.error(`Something went wrong:
    ${error}`);
  }
};
