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
import { getAnimals } from '../../api';

interface Nutrient {
    id: number;
    value: number;
    description: string;
    nutrient: {
        id: number;
        name: string;
        description: string;
        unit: string;
    }
}

interface Animal {
    id: number;
    name: string;
    description: string;
    unit: string;
    nutrients: Nutrient[];
}

export default function AnimalGraph() {
    const [animal, setAnimal] = useState<Animal>();
    const [nutrients, setNutrients] = useState<Nutrient[]>([]);
    
    useEffect(() => {
        getAnimals()
            .then(response => {
                const animal = response.data.find((animal: Animal) => animal.id === 5)
                setAnimal(animal)
                const newNutrients = animal.nutrients.filter((nutrient: Nutrient) => {
                    return nutrient.value && nutrient.nutrient.unit === '%' && nutrient.nutrient.name.toLowerCase() !== 'dry matter'
                })
                setNutrients(newNutrients)
            });
    }, []);

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
            data: nutrients.map((item: Nutrient) => item.nutrient.name.toLocaleLowerCase()),
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
                data: nutrients.map((nutrient: Nutrient) => nutrient.value),
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
