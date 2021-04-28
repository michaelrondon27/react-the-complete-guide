import React from 'react';

// CSS
import './Chart.css'

// JSX
import ChartBat from './ChartBar';

const Chart = props => {
    return <div className="chart">
        {props.dataPoints.map( dataPaoint => (
            <ChartBart 
                key={ dataPaoint.label }
                label={ dataPaoint.label }
                maxValue={ null } 
                value={ dataPaoint.value } 
            />
        ))}
    </div>;
};

export default Chart;
