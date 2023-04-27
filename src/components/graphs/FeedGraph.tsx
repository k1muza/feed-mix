import React, { useEffect, useState } from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import { BarChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent,
    TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { getNutrients } from '../../api';

interface Nutrient {
    id: number;
    name: string;
    description: string;
    unit: string;
}

const Graph: React.FC = () => {
    const [nutrients, setNutrients] = useState<Nutrient[]>([]);
    const [targets, setTargets] = useState<number[]>([]);

    useEffect(() => {
        getNutrients()
            .then(response => {
                const nutrients = response.data.filter((item: Nutrient) => {
                    return item.unit == '%' && !item.name.includes('total')
                })
                setNutrients(nutrients)
            });
    }, []);


    function randomWithDeviation(mean: number, deviation: number) {
        const output = mean - (Math.floor(Math.random() * deviation) / 2) + (Math.floor(Math.random() * deviation) / 2);
        return Math.abs(output);
    }

    useEffect(() => {
        const targets = nutrients.map((nutrient: Nutrient) => {
            return Math.floor(Math.random() * 100)
        })
        setTargets(targets)
    }, [nutrients])

    echarts.use([
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        CanvasRenderer,
        
    ]);

    const option = {
        title: {
            text: 'Current vs Target',
            subtext: 'Fake Data'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: [
                {
                    name: 'Current',
                    icon: 'circle',
                    itemStyle: {
                        color: '#73c0de'
                    }
                },
                {
                    name: 'Target',
                    icon: 'circle',
                    itemStyle: {
                        color: '#ddd'
                    }
                }
            ]
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: nutrients.map((nutrient) => {
                    return nutrient.name
                })
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Current',
                type: 'bar',
                data: nutrients.map((nutrient, index) => {
                    const value = randomWithDeviation(targets[index], 20)
                    return {
                        value,
                        itemStyle: {
                            color: value > targets[index] ? '#73c0de' : '#f56c6c'
                        }
                    }
                }),
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 5,
                },
            },
            {
                name: 'Target',
                type: 'bar',
                data: targets.map(target => {
                    return {
                        value: target,
                        itemStyle: {
                            color: '#dddddd'
                        }
                    }
                }),
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 5,
                },
            }
        ],
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
};

export default Graph;
