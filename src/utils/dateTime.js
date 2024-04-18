export const convertTimeStampToReadableFormat = (timestamp) => {
        
    // Create a new Date object from the timestamp
    const date = new Date(timestamp);

    // Extract hours and minutes
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Convert hours to AM/PM format 
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format

    // Format the time string
    const timeString = `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;

    return timeString;
  }