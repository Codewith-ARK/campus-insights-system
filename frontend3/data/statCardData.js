import {
  LuArrowUp,
  LuMessageCircle,
  LuMessageSquare,
  LuText,
} from 'react-icons/lu';

export const statCardsData = [
  {
    label: 'New Feedbacks',
    value: 128,
    outcome: (
      <>
        <LuArrowUp className="text-green-400" /> 12% this week
      </>
    ),
    icon: <LuMessageCircle size={28} className="text-primary" />,
  },
  {
    label: 'Resolved Queries',
    value: 89,
    outcome: (
      <>
        <LuArrowUp className="text-green-400" /> 8% this week
      </>
    ),
    icon: <LuMessageSquare size={28} className="text-green-500" />,
  },
  {
    label: 'Total Messages',
    value: 304,
    outcome: (
      <>
        <LuArrowUp className="text-green-400" /> 5% this week
      </>
    ),
    icon: <LuText size={28} className="text-yellow-500" />,
  },
  {
    label: 'User Engagement',
    value: '72%',
    outcome: (
      <>
        <LuArrowUp className="text-green-400" /> 4% this week
      </>
    ),
    icon: <LuArrowUp size={28} className="text-blue-500" />,
  },
];
