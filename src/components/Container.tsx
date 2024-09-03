import { TFeedbackItem } from '../lib/types';
import FeedbackList from './FeedbackList';
import Header from './Header';

type ContainerProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
}: ContainerProps) {
  return (
    <main className='container'>
      <Header />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}
