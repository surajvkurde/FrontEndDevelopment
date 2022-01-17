import React from 'react';
import "./Widgets.css";
import InfoIcon  from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) => {
        <div className='widgets_article'>
            <div className='widgets_articleLeft'>
                <FiberManualRecordIcon/>
            </div>
            <div className='widgets_articleRight'>
                <h2>{heading}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    }

    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle("ReactjS is back","New version launched")}
            {newsArticle("Corona Updates","Omicrone cases")}
            {newsArticle("IT Jobs boom","Campus Hiring")}
            {newsArticle("Learning after pandamic","Higher Education")}
            {newsArticle("Pollution impacts and prevention measures","Rural Development")}
        </div>
    );
}

export default Widgets;
