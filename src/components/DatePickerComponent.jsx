import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

function DatePickerComponent() {
    const [selectedDate, setSelectedDate] = useState(null)

    return (
        <div style={{ paddingBottom: '100px', paddingTop: '100px' }}>
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='dd/MM/yyyy'
                // minDate={new Date()}
                filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
            />
        </div>
    )
}

export default DatePickerComponent
