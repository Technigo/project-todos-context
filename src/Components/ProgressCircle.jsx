import '../Styles/ProgressCircle.css'

export const ProgressCircle = ({ totalTasks, completedTasks }) => {
  const radius = 30
  const strokeWidth = 6

  const svgSize = radius * 2 + strokeWidth * 2
  const center = radius + strokeWidth

  const circumference = 2 * Math.PI * radius
  const percentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0
  const progress = circumference - (percentage / 100) * circumference

  return (
    <div className="progress-container">
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
      >
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="transparent"
          stroke="#ddd"
          strokeWidth={strokeWidth}
          className="circle-background"
        />
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="transparent"
          stroke="#7d59e7"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"
          className="circle-progress"
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14px"
          className="progress-text"
        >
          {Math.round(percentage)}%
        </text>
      </svg>
    </div>
  )
}
