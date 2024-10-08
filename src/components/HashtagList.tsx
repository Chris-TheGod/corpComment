import { useFeedbackItemsStore } from '../stores/feedbackitemsStore';
import HashtagItem from './HashtagItem';

export default function HashtagList() {
  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem
          onSelectCompany={selectCompany}
          key={company}
          company={company}
        />
      ))}
    </ul>
  );
}
