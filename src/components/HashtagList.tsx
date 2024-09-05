import HashtagItem from './HashtagItem';

type HashtagListProps = {
  handleSelectCompany: (company: string) => void;
  companyList: string[];
};

export default function HashtagList({
  companyList,
  handleSelectCompany,
}: HashtagListProps) {
  return (
    <ul className='hashtags'>
      {companyList.map((company) => (
        <HashtagItem
          onSelectCompany={handleSelectCompany}
          key={company}
          company={company}
        />
      ))}
    </ul>
  );
}
