import { Rose } from '@ant-design/plots';
import { useEffect, useState } from 'react';
import * as S from './styles';
type Stat = { name: string; value: number; color?: string };

type Props = {
  stats: Stat[];
};

function StatsRoseChart({ stats }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // <= 768px é mobile
    }
    handleResize(); // checa na primeira renderização
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const config = {
    data: stats,
    xField: 'name',
    yField: 'value',
    colorField: 'name',

    innerRadius: 0.1,
    scale: {
      x: { padding: 0 },
      y: { domain: isMobile ? [0, 300] : [0, 150] },
    },
    axis: false,
    legend: false,
    label: {
      text: (d: Stat) => `${d.name.toUpperCase()}: ${d.value}`,
      position: 'outside',
      style: { fill: '#fff', fontSize: isMobile ? 9 : 12, fontWeight: 600 },
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
