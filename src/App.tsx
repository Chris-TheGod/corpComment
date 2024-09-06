import { useEffect } from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HashtagList from './components/HashtagList';
import { useFeedbackItemsStore } from './stores/feedbackitemsStore';

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, []);

  return (
    <div className='app'>
      <Footer />

      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
