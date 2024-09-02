import { useEffect, useState } from 'react';
import FeedbackItem from './FeedbackItem';
import Spinner from './Spinner';

export default function FeedbackList() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFeedbackItems(data.feedbacks);
        setLoading(false);
      });
  }, []);

  return (
    <ol className='feedback-list'>
      {isLoading && <Spinner />}
      {feedbackItems.map((feedbackItem) => (
        <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
      ))}
    </ol>
  );
}
