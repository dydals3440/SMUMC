import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MenuItem from '@mui/material/MenuItem';

import * as S from './MembersAll.style';
import MemberCard from '../../../components/membercard/MemberCard';
import { MEMBERS } from '../../../constants/members';
import { BROWSER_PATH } from '../../../constants/path';
import DEFAULT_FEMALE_IMAGE from '../../../assets/img/DEFAULT_FEMALE.webp';
import DEFAULT_MALE_IMAGE from '../../../assets/img/DEFAULT_MALE.webp';

const MembersAll = () => {
  const [year, setYear] = useState(6);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const membersPerPage = 10;
  const darkMode = useSelector(state => state.darkMode);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleChange = event => {
    setYear(event.target.value);
    setPage(1);
  };

  const filteredMembers =
    year === 0 ? MEMBERS : MEMBERS.filter(item => item.year === year);
  const startIndex = (page - 1) * membersPerPage;
  const endIndex = startIndex + membersPerPage;
  const displayedMembers = filteredMembers.slice(startIndex, endIndex);

  return (
    <S.Container>
      <S.FormControlStyle>
        <S.SelectStyle
          darkMode={darkMode}
          labelId='member-year-select-label'
          id='member-year-select'
          value={year}
          onChange={handleChange}
        >
          <MenuItem value={0}>전체</MenuItem>
          <MenuItem value={2}>2기</MenuItem>
          <MenuItem value={3}>3기</MenuItem>
          <MenuItem value={4}>4기</MenuItem>
          <MenuItem value={5}>5기</MenuItem>
          <MenuItem value={6}>6기</MenuItem>
        </S.SelectStyle>
      </S.FormControlStyle>
      <S.MemberContainer>
        {displayedMembers.map(({ name, year, part, sex, id, position }) => (
          <MemberCard
            key={id}
            size='m'
            name={name}
            th={year}
            department={part}
            badge={position !== '챌린저' && position}
            imgurl={sex === 'w' ? DEFAULT_FEMALE_IMAGE : DEFAULT_MALE_IMAGE}
            onClick={() => {
              navigate(`${BROWSER_PATH.MEMBERS.BASE}/${id}`);
            }}
          />
        ))}
      </S.MemberContainer>
      <S.PaginationStyle
        count={Math.ceil(filteredMembers.length / membersPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </S.Container>
  );
};

export default MembersAll;
