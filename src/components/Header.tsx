import { useFeedbackItemsContext } from '../lib/hooks';
import FeedbackForm from './FeedbackForm';
import Logo from './Logo';
import PageHeading from './PageHeading';
import Pattern from './Pattern';

export default function Header() {
  const { handleAddToList } = useFeedbackItemsContext();

  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm onAddToList={handleAddToList} />
    </header>
  );
}
