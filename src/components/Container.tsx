import { TFeedbackItem } from '../lib/types';
import FeedbackList from './FeedbackList';
import Header from './Header';

type ContainerProps = {
  isLoading: boolean;
  feedbackItems: TFeedbackItem[];
  errorMessage: string;
  handleAddToList: (text: string) => void;
};

export default function Container({
  feedbackItems,
  isLoading,
  errorMessage,
  handleAddToList,
}: ContainerProps) {
  return (
    <main className='container'>
      <Header handleAddToList={handleAddToList} />
      <FeedbackList
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={feedbackItems}
      />
    </main>
  );
}
