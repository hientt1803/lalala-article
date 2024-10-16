import { addHours, format, isSameDay } from "date-fns";
import moment from "moment";

export const HOST_URL = process.env.NEXT_PUBLIC_HOST_URL;
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
export const CHANNEL_ID = process.env.NEXT_PUBLIC_CHANNEL_ID;
export const POST_TYPE = process.env.NEXT_PUBLIC_POST_TYPE;


// ********************** DATE FORMATER **********************
export const formatDateUTC = (date: Date) => {
  const momentCheck = moment(date).isValid();
  if (date == undefined || date == null || !momentCheck) {
    date = new Date();
  }
  const newDate = moment(date.getTime() + 86400).format("MMM D, YYYY");
  return newDate;
};

export const formatDateToYearMonthDay = (date: Date): string => {
  const momentCheck = moment(date).isValid();
  if (date == undefined || date == null || !momentCheck) {
    date = new Date();
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const daysBetweenUTC = (startDate: Date, endDate: Date) => {
  const momentCheckStartDate = moment(startDate).isValid();
  const momentCheckEndDate = moment(endDate).isValid();
  if (startDate == undefined || startDate == null || !momentCheckStartDate) {
    startDate = new Date();
  }
  if (endDate == undefined || endDate == null || !momentCheckEndDate) {
    endDate = new Date();
  }
  const oneDay = 1000 * 60 * 60 * 24;
  const startUTC = Date.UTC(
    startDate.getFullYear(),
    startDate.getMonth(),
    startDate.getDate()
  );
  const endUTC = Date.UTC(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  return Math.floor((endUTC - startUTC) / oneDay);
};

export const convertDateToString = (date: Date) => date.toDateString();
export const convertStringToDate = (dateString: string) => new Date(dateString);

// Check if startDate is today or in the future
export const checkIfDateIsGreaterThanToday = (date: Date) => {
  const today = moment().startOf("day");
  const inputDate = moment(date).startOf("day");

  // If the input date is today or later, return the input date
  if (inputDate.isSameOrAfter(today)) {
    return inputDate.toDate();
  }

  // If input date is in the past, return today's date
  return today.toDate();
};

export const checkIfEndDateIsValid = (startDate: Date, endDate: Date) => {
  const start = moment(startDate).startOf("day");
  const end = moment(endDate).startOf("day");

  // If endDate is on or before startDate, return startDate + 1 day
  if (end.isSameOrBefore(start)) {
    return start.add(1, "day").toDate();
  }

  // If endDate is valid, return the input endDate
  return end.toDate();
};

export const isValidDate = (date: string) => {
  const parsedDate = Date.parse(date);
  return !isNaN(parsedDate);
};

export function getAmOrPm(hour: number) {
  if (hour < 0 || hour > 23) {
    return "Invalid hour. Please enter a number between 0 and 23.";
  }
  return hour < 12 ? "AM" : "PM";
}

export const generateTimeSlots = (
  startDate: Date,
  startTime: string,
  hoursAhead: number = 20
) => {
  // Parse the start time or use 14:00 as default
  const [hours, minutes] = (startTime || "14:00").split(":").map(Number);

  // Set the start date with the given time
  const start = new Date(startDate);
  start.setHours(hours, minutes, 0, 0);

  const slots = [];

  for (let i = 0; i <= hoursAhead; i++) {
    const currentTime = addHours(start, i);

    let label;
    if (isSameDay(currentTime, start)) {
      // If it's the same day, just show the time
      label = format(currentTime, "HH:mm");
    } else {
      // If it's a different day, show the date and time
      label = format(currentTime, "MMM dd, HH:mm");
    }

    slots.push({
      id: i,
      label: label,
      value: format(currentTime, "yyyy-MM-dd'T'HH:mm:ss"),
    });
  }

  return slots;
};

// ********************** CURRENCY FORMATER **********************
export const formatCurrency = (value: number = 0) => {
  const formatedNumber = value.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatedNumber.replace("₫", "VND");
};

export const renderDiscountValueByType = (value: number, type: string) => {
  if (type === "percentage") {
    return `${value}%`;
  }
  return formatCurrency(value);
};

// ********************** STRING **********************
export function convertToTitleCase(input: string): string {
  return input
    .split("_")
    .map((word, index) =>
      index === 0
        ? word.charAt(0).toUpperCase() + word.slice(1)
        : word.toLowerCase()
    )
    .join(" ");
}

export function getRatingStatus(rating: number): string {
  if (rating == null) {
    rating = 0;
  }
  if (rating > 9) {
    return "Excellent Location";
  } else if (rating > 8) {
    return "Very Good";
  } else if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Fair";
  } else if (rating > 3) {
    return "Below Average";
  } else if (rating > 0) {
    return "Poor";
  } else {
    return "No Rating Available";
  }
}

export const capitalizeFirstLetter = (letter: string) => {
  return letter.charAt(0).toUpperCase() + letter.slice(1);
};

// ********************** CHECK DEVICE VIEWPORT **********************
export const isMobile = (userAgent: string): boolean => {
  return /android.+mobile|ip(hone|[oa]d)/i.test(userAgent);
};
