import { useParams } from 'react-router-dom';

const MembersDetail = () => {
  const { id } = useParams();
  return <div>{id}번 멤버의 세부 페이지입니다.</div>;
};

export default MembersDetail;
