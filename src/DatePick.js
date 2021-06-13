import React from 'react';
import { DateRangePicker } from 'react-dates'
import {Button} from 'reactstrap';

class DatePick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    renderButton = () => {
        return (
            <div>Merhaba</div>
        )
    }

    onDateSubmit(e) {
        console.log(this.state.startDate);
        console.log(this.state.endDate);
    }
    render() {
        return (
            <div className="container" style={{textAlign:'right'}}>
                <div className="row align-items-start">
                    <div className="col">
                        <label>Select date range</label>
                    </div>
                    <div className="col" style={{fontSize: '11', marginBottom: '30px'}}>
                        <DateRangePicker
                            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                            onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                        />
                    </div>
                    <div className="col-1">
                        <Button color="primary" onClick={() => this.onDateSubmit()}>Apply</Button>
                    </div>

                </div>
            </div>
        );
    };
};

export default DatePick;