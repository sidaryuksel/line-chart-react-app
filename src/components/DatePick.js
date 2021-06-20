import React from 'react';
import { DateRangePicker } from 'react-dates';
import CaretDownFill from '../CaretDownFill.svg';

class DatePick extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null
        }
    }

    onIconChange(){
        return <img src={CaretDownFill} alt=''/>
    }

    displayFormat(){

    }

    render() {
        return (
            <div className="container right-align">
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({startDate, endDate})} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => { this.setState({ focusedInput }) }} // PropTypes.func.isRequired,
                    customArrowIcon="-" // PropTypes.node,
                    small={true}
                    block={true}
                    noBorder={true}
                    customInputIcon={this.onIconChange()}
                    inputIconPosition="after"
                    displayFormat={() => "MMM DD" }
                    daySize={30}

                />
            </div>
        );
    };
};

export default DatePick;