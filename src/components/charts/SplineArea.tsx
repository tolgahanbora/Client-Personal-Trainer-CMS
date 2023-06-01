/**
 * Sample for Line Series
 */
import * as React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, Legend, Category, Tooltip,Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
export let data1 = [
    { x: "10min", y: 80 }, { x: "15min", y: 88 }, { x: "20min", y: 97.6 }, { x: "25min", y: 90.3 }, { x: "30min", y: 110.1 }, { x: "35min", y: 129.3 }, { x: "40min", y: 139 }, { x: "45min", y: 144 },{ x: "50min", y: 133.5 } 
];

const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
     }
         .charts {
             align :center
         }`;
function Line() {
        return (
            <div className="control-pane">
                <style>{SAMPLE_CSS}</style>
                <div className="control-section">
                    <ChartComponent
                        id="charts"
                        style={{ textAlign: 'center' }}
                        primaryXAxis={{
                            valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 },  labelFormat: 'y'
                        }}
                  
                        primaryYAxis={{
                            title: 'bpm', rangePadding: 'None', minimum: 60, maximum: 150, interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
                        }}
                        chartArea={{ border: { width: 0 } }}
                        tooltip={{ enable: true }}
                        legendSettings={{enableHighlight: true}}
                        width={Browser.isDevice ? '100%' : '75%'}
                        title="❤️ Heart Rate            -                119 avg bpm"
                        >
                        <Inject services={[LineSeries, Category, Legend, Tooltip,Highlight]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective
                                dataSource={data1} xName="x" yName="y" name="bpm" width={2}
                                marker={{ visible: true, width: 7, height: 7, shape: 'Circle', isFilled: true }}
                                type="Line"
                            ></SeriesDirective>
                        </SeriesCollectionDirective>
                    </ChartComponent>
                </div>
            </div>
        )
   
}
export default Line;