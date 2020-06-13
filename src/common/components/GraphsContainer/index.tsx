import React, { useEffect, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_dataviz from '@amcharts/amcharts4/themes/dataviz';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import styles from './style';
import ButtonCustom from './../ButtonCustom/index';

function GraphsContainer(props: any) {
    const classes = styles();
    const dataAverage = props.dataAverage;

    const [dataChart, setdataChart] = useState(dataAverage);
    const [categoryName, setcategoryName] = useState('name');
    const [value, setValue] = useState('average');
    const [chart, setChart] = useState<am4charts.PieChart>();

    useEffect(() => {
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);

        let chartTmp = am4core.create('chartdiv', am4charts.PieChart);

        chartTmp.hiddenState.properties.opacity = 0;
        chartTmp.data = dataChart;

        let series = chartTmp.series.push(new am4charts.PieSeries());
        series.dataFields.value = value;
        series.dataFields.radiusValue = value;
        series.dataFields.category = categoryName;
        series.slices.template.cornerRadius = 6;
        series.colors.step = 3;
        series.hiddenState.properties.endAngle = -90;

        series.labels.template.maxWidth = 130;
        series.labels.template.wrap = true;
        series.labels.template.paddingTop = 0;
        series.labels.template.paddingBottom = 0;
        chartTmp.legend = new am4charts.Legend();

        setChart(chartTmp);
        
    }, []);

    return (
        <div>
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default GraphsContainer;
