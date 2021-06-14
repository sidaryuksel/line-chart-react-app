import React, { useState } from 'react';
import { Button, Row, Col, Container } from 'reactstrap';
import '../style.css';

const Legend = () => {
    const urlPages = ['ytube.page', 'io.deals', 'amzn.how', 'dev.care', 'url.cafe'];
    const [clicked, setClicked] = useState(false);

    const onButtonClick = (e) => {
        console.log(clicked);
        setClicked(!clicked);
    };

    const renderUrl = urlPages.map((urlPage) => {
                return (
                    <div className='col'>
                        <Button key={urlPage} className='url-page'>{urlPage}</Button>
                    </div>
                )
            });

    return (
        <div className='container' style={{ marginLeft: '56px' }}>
            <Button className="legend" onClick={onButtonClick}>Legend</Button><hr />
            <div className='row align-items-start' >
                {clicked ? renderUrl : null}
            </div>
        </div>
    );
};

export default Legend;
