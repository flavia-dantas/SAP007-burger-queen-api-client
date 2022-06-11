import { differenceInMinutes, minutesToHours, format} from "date-fns";

export const calculationPreparationTime = (processed, created) => {

  const processedAt = new Date(processed);
  const createdAt = new Date(created);
  const preparationTime = differenceInMinutes(processedAt, createdAt);
  if (preparationTime < 60) {
    return `${preparationTime} min(s)`;
  } else {
    return `${minutesToHours(preparationTime)} hora(s)`;
  }
};

export const formatTime = (date) => {
  const newDate = new Date(date);
  const formatDate = format(newDate, "dd/MM/yy HH:mm");
  return formatDate;
};
