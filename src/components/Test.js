// src/Calendar.js
import React, { useState } from "react";
import styled from "styled-components";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  background-color: #1e1e2b;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e1e2b;
  color: white;
  padding: 10px;
`;

const DaysRow = styled.div`
  display: flex;
  background-color: #1e1e2b;
  color: white;
`;

const CalendarRow = styled.div`
  display: flex;
  width: 100%;
`;

const Day = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
  background-color: ${(props) =>
    props.isSelected
      ? "#816EBF"
      : props.isSameMonth
      ? props.isWeekend
        ? "#1E1E2B"
        : "#1E1E2B"
      : "#1E1E2B"};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

const DayHeader = styled.div`
  flex: 1;
  padding: 10px;
  text-align: center;
`;

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = ({ selectedDate, setSelectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const startMonth = startOfMonth(currentDate);
  const endMonth = endOfMonth(currentDate);
  const startWeek = startOfWeek(startMonth);
  const endWeek = endOfWeek(endMonth);

  const handlePrevMonth = () => {
    setCurrentDate(addDays(startMonth, -1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addDays(endMonth, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderDaysOfWeek = () => {
    return (
      <DaysRow>
        {daysOfWeek.map((day) => (
          <DayHeader key={day}>{day}</DayHeader>
        ))}
      </DaysRow>
    );
  };

  const renderCells = () => {
    const rows = [];
    let days = [];
    let day = startWeek;
    let formattedDate = "";

    while (day <= endWeek) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        const cloneDay = day;
        days.push(
          <Day
            key={day}
            isSelected={isSameDay(day, selectedDate)}
            isSameMonth={isSameMonth(day, currentDate)}
            isWeekend={day.getDay() === 6 || day.getDay() === 0}
            onClick={() => handleDateClick(cloneDay)}
          >
            {formattedDate}
          </Day>
        );
        day = addDays(day, 1);
      }
      rows.push(<CalendarRow key={day}>{days}</CalendarRow>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <button onClick={handlePrevMonth}>Prev</button>
        <div>{format(currentDate, "MMMM yyyy")}</div>
        <button onClick={handleNextMonth}>Next</button>
      </CalendarHeader>
      {renderDaysOfWeek()}
      {renderCells()}
    </CalendarContainer>
  );
};

export default Calendar;
