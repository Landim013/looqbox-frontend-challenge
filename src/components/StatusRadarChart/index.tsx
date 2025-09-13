// src/components/StatsRadarChart/index.tsx
// import { Radar } from '@ant-design/plots';
// import * as S from './styles';

// type Stat = { name: string; value: number; color: string };
// type Props = {
//   stats: Stat[];
//   max?: number;
// };

// function StatsRadarChart({ stats, max = 150 }: Props) {
//   const mainColor = stats[0]?.color || '#22c55e';

//   const config = {
//     data: stats,
//     xField: 'name',
//     yField: 'value',
//     scale: {
//       x: { padding: 0.5, align: 0 },
//       y: {
//         domain: [0, max],
//       },
//     },
//     axis: {
//       x: {
//         labelFill: mainColor,
//         labelFontSize: 14,
//         labelFontWeight: 'bold',
//       },
//       y: {
//         labelFill: '#fff',
//         grid: true,
//         line: {
//           style: {
//             stroke: '#fff',
//             lineWidth: 1,
//             lineDash: [],
//           },
//         },
//       },
//     },
//     style: {
//       lineWidth: 2,
//       stroke: mainColor,
//     },
//     area: {
//       style: {
//         fill: mainColor,
//         fillOpacity: 0.2,
//       },
//     },
//     point: {
//       size: 4,
//       style: {
//         fill: mainColor,
//         stroke: '#fff',
//       },
//     },
//     legend: false,
//   };

//   return (
//     <>
//       <S.Wrapper />
//       <Radar {...config} />
//     </>
//   );
// }

// export default StatsRadarChart;
import { Rose } from '@ant-design/plots';
import * as S from './styles';
type Stat = { name: string; value: number; color?: string };

type Props = {
  stats: Stat[];
};

function StatsRoseChart({ stats }: Props) {
  const config = {
    data: stats,
    xField: 'name',
    yField: 'value',
    colorField: 'name', // cada stat terá uma cor diferente (ou mesma se quiser)

    innerRadius: 0.2,
    scale: { x: { padding: 0 } },
    axis: false,
    legend: false,
    label: {
      text: (d: Stat) => `${d.name.toUpperCase()}: ${d.value}`,
      position: 'outside',
      style: { fill: '#fff', fontSize: 13, fontWeight: 600 },
    },
    style: { fillOpacity: 0.8 },
  };

  return (
    <S.Container>
      <Rose {...config} />
    </S.Container>
  );
}

export default StatsRoseChart;
