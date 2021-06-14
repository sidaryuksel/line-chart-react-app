import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DateFilters = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [item, setItem] = useState('Last three month')
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const selectItem = (e) => {console.log(e.target.value) }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle value={item} caret style={{ backgroundColor: 'white', color: '#222' }}>
                {item}
            </DropdownToggle>
            <DropdownMenu onClick={(e) => setItem(e.target.value)}>
                <DropdownItem value='Today' onClick={selectItem}>Today</DropdownItem>
                <DropdownItem value='Yesterday' onClick={selectItem}>Yesterday</DropdownItem>
                <DropdownItem value= 'Last week' >Last week</DropdownItem>
                <DropdownItem value='Last month' >Last month</DropdownItem>
                <DropdownItem value='Last three month'>Last three month</DropdownItem>
                <DropdownItem value='Custom'>Custom</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default DateFilters;