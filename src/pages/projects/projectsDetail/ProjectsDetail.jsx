import { useParams } from 'react-router-dom';

const ProjectsDetail = () => {
  const { id } = useParams();
  return <div>{id}번 프로젝트 디테일 페이지입니다.</div>;
};

export default ProjectsDetail;
