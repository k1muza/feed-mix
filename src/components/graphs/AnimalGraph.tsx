import React, { useEffect, useState } from 'react'; import * as echarts from 'echarts/core';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent,
    TooltipComponent,
    MarkPointComponent,
    DataZoomComponent,
    DataZoomInsideComponent,
    DataZoomSliderComponent,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { GraphProps } from '../../interfaces/graphProps';

export default function AnimalGraph({labels, values}: GraphProps) {
    echarts.use([
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        MarkPointComponent,
        DataZoomComponent,
        DataZoomInsideComponent,
        DataZoomSliderComponent,
        CanvasRenderer,
    ]);

    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                label: {
                    show: true
                }
            }
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            data: ['Requirements']
        },
        calculable: true,
        grid: {
            top: '12%',
            left: '1%',
            right: '10%',
            containLabel: true
        },
        yAxis: {
            type: 'category',
            data: labels,
            axisTick: {
                alignWithLabel: true
            }
        },
        xAxis: [
            {
                type: 'value',
            }
        ],
        dataZoom: [
            {
                show: true,
                start: 0,
                end: 100
            },
            {
                type: 'inside',
                start: 0,
                end: 100
            },
            {
                show: true,
                yAxisIndex: 0,
                filterMode: 'empty',
                width: 30,
                height: '80%',
                showDataShadow: false,
                left: '93%'
            }
        ],
        series: [
            {
                name: 'Requirements',
                itemStyle: {
                    borderRadius: 8
                },
                data: values,
                type: 'bar',
                barWidth: 10,
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' }
                    ]
                }
            }
        ]
    };

    return (
        <div className="flex-grow p-6 overflow-auto bg-gray-200">
            <div className="h-full col-span-1 bg-white border border-gray-300 p-4">
                <ReactEChartsCore
                    echarts={echarts}
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={'theme_name'}
                    opts={{}}
                />
            </div>
        </div>
    );
}
