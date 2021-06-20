import React, { useState } from 'react';
import { Button} from 'reactstrap';

const Legend = () => {
    const urlPages = ['ytube.page', 'io.deals', 'amzn.how', 'dev.care', 'url.cafe'];
    const [clicked, setClicked] = useState(false);

    const onButtonClick = (e) => {
        setClicked(!clicked);
    };

    const renderUrl = urlPages.map((urlPage, key) => {
                return (
                    <div key={key} className='col'>
                        <Button className='url-page'>{urlPage}</Button>
                    </div>
                )
            });

    return (
        <div className='margin-bottom margin-right' style={{ marginLeft: '56px' }}>
            <Button className="legend" onClick={onButtonClick}>Legend</Button>
            <div className='row align-items-start' >
                {clicked ? renderUrl : null}
            </div>
        </div>
    );
};

export default Legend;
