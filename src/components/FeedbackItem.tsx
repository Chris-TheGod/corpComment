import { useState } from 'react';
import { TriangleUpIcon } from '@radix-ui/react-icons';
import { FeedbackItemProps } from '../lib/types';

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      onClick={() => setIsOpen((prev) => !prev)}
      className={`feedback ${isOpen ? 'feedback--expand' : ''}`}
    >
      <button>
        <TriangleUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      <p>{feedbackItem.daysAgo === 0 ? 'New' : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
