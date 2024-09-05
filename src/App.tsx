import Container from './components/Container';
import Footer from './components/Footer';
import HashtagList from './components/HashtagList';
import FeedbackItemsContextProvider from './contexts/FeedbackItemsContextProvider';

function App() {
  return (
    <div className='app'>
      <Footer />

      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
