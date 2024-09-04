type HashtagItemProps = {
  company: string;
};

export default function HashtagItem({ company }: HashtagItemProps) {
  return (
    <li>
      <button>#{company}</button>
    </li>
  );
}
