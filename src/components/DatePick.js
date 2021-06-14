import React from 'react';
import {DateRangePicker} from 'react-dates';

class DatePick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    onDatesChange(e) {
        console.log(this.state.startDate);
        console.log(this.state.endDate);
    }

    render() {
        return (
            <div className="container" style={{ textAlign: 'right' }}>
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => {this.setState({ focusedInput })}} // PropTypes.func.isRequired,
                />
            </div>
        );
    };
};

export default DatePick;