import { useEffect, useMemo, useState } from 'react';
import Container from './components/Container';
import Footer from './components/Footer';
import HashtagList from './components/HashtagList';
import { TFeedbackItem } from './lib/types';

function App() {
  const [selectedCompany, setSelectedCompany] = useState('');

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <div className='app'>
      <Footer />

      <Container
        errorMessage={errorMessage}
        isLoading={isLoading}
        feedbackItems={filteredFeedbackItems}
        handleAddToList={handleAddToList}
      />

      <HashtagList
        handleSelectCompany={handleSelectCompany}
        companyList={companyList}
      />
    </div>
  );
}

export default App;
