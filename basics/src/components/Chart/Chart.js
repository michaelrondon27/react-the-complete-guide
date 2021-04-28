import React from 'react';

// CSS
import './Chart.css'

// JSX
import ChartBar from './ChartBar';

const Chart = props => {
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value );
    const totalMaximun = Math.max( ...dataPointValues );

    return <div className="chart">
        {props.dataPoints.map( dataPaoint => (
            <ChartBar 
                key={ dataPaoint.label }
                label={ dataPaoint.label }
                maxValue={ totalMaximun } 
                value={ dataPaoint.value } 
            />
        ))}
    </div>;
};

export default Chart;
