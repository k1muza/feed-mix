import * as echarts from 'echarts/core';

import ReactEChartsCore from 'echarts-for-react/lib/core';
import { BarChart } from 'echarts/charts';
import {
  GridComponent,
  LegendComponent,
  TooltipComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { GraphProps } from '../../interfaces/graphProps';

export default function NutrientGraph({labels, values}: GraphProps) {

    echarts.use([
        TooltipComponent,
        GridComponent,
        LegendComponent,
        BarChart,
        CanvasRenderer,
    ]);

    const option = {
        title: {
          text: 'World Population'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: labels
        },
        series: [
          {
            name: 'Concentration',
            type: 'bar',
            data: values,
            itemStyle: {
                barBorderRadius: 5,
            },
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
