import React from "react";

export default function Date(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[props.date.getDay()];
  const hours = props.date.getHours();
  if (hours > 10) {
    hours = `0${hours}`;
  }
  const minutes = props.date.getMinutes();
  if (minutes > 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {day}
      {hours}:{minutes}
    </div>
  );
}
