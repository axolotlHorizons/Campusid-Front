/* Imports */
import React, { useEffect, useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import styles from './style';
import ButtonCustom from './../ButtonCustom/index';

function ColumnChartContainer(props: any) {
    const classes = styles();
    const dataAverage = props.dataAverage;
    const aspectAverage = props.aspectAverage;
    const coursesAverage = props.coursesAverage;

    // Change const name here 
    const topFlopAverage = props.topFlopAverage;

    const [dataChart, setdataChart] = useState(dataAverage);
    const [categoryName, setcategoryName] = useState('name');
    const [value, setValue] = useState('average');
    const [chart, setChart] = useState<am4charts.XYChart>();


    useEffect(() => {
        am4core.useTheme(am4themes_dataviz);
        am4core.useTheme(am4themes_animated);

        let chartTmp = am4core.create("chartdiv", am4charts.XYChart);

        chartTmp.hiddenState.properties.opacity = 0;
        chartTmp.data = dataAverage;

        chartTmp.padding(40, 40, 40, 40);

        let categoryAxis = chartTmp.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = categoryName;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;

        let valueAxis = chartTmp.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        //valueAxis.rangeChangeEasing = am4core.ease.linear;
        //valueAxis.rangeChangeDuration = 1500;

        let series = chartTmp.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryX = categoryName;
        series.dataFields.valueY = value;
        series.tooltipText = "{valueY.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        //series.interpolationDuration = 1500;
        //series.interpolationEasing = am4core.ease.linear;
        let labelBullet = series.bullets.push(new am4charts.LabelBullet());
        labelBullet.label.verticalCenter = "bottom";
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";

        chartTmp.zoomOutButton.disabled = true;

        series.columns.template.adapter.add("fill", function (fill, target) {
            if(target.dataItem !== undefined)
                return chartTmp.colors.getIndex(target.dataItem.index);
        });

        setInterval(function () {
        am4core.array.each(chartTmp.data, function (item) {
        item.visits += Math.round(Math.random() * 200 - 100);
        item.visits = Math.abs(item.visits);
        })
        chartTmp.invalidateRawData();
        }, 2000)

        categoryAxis.sortBySeries = series;

        setChart(chartTmp);

    }, []);

    const aspectChart = () => {
        let chartTmp: any = chart || {};
        chartTmp.data = aspectAverage;
        setChart(chartTmp);
    };

    const domainChart = () => {
        let chartTmp: any = chart || {};
        chartTmp.data = dataChart;
        setChart(chartTmp);
    };

    const coursesChart = () => {
        let chartTmp: any = chart || {};
        chartTmp.data = coursesAverage;
        setChart(chartTmp);
    };

    // change name here ?
    const TopFlopChart = () => {
        let chartTmp: any = chart || {};
        chartTmp.data = topFlopAverage;
        setChart(chartTmp);
    };

    return (
        <div>
            <ButtonCustom valueButton="Domaine" callBack={domainChart} />
            <ButtonCustom valueButton="Aspect" callBack={aspectChart} />
            <ButtonCustom valueButton="Cours" callBack={coursesChart} />
            <div id="chartdiv" className={classes.graphStyle}></div>
        </div>
    );
}

export default ColumnChartContainer;
