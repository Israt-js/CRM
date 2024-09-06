import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Date = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
      <div className="p-4 w-full max-w-xs md:max-w-md lg:max-w-lg">
        <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} showTimeSelect dateFormat="Pp" placeholderText="select a date" className="w-full p-2 border border-gray-300"/>
      </div>
    );
  };
  
export default Date;