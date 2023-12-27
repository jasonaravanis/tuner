export const SvgGlow = () => (
  <filter id="glow" x="-100%" y="-100%" width="300%" height="300%">
    <feGaussianBlur stdDeviation="5" result="coloredBlur" />
    <feMerge>
      <feMergeNode in="coloredBlur" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);
