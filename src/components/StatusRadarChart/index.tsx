import { Radar } from '@ant-design/plots';

type Props = {
  stats: { name: string; value: number }[];
};

function StatsRadarChart({ stats }: Props) {
  const config = {
    data: stats,
    xField: 'name',
    yField: 'value',
    seriesField: 'name',
    meta: {
      value: { min: 0, max: 150 },
    },
    area: {},
    point: { size: 4 },
  };

  return <Radar {...config} />;
}

export default StatsRadarChart;
