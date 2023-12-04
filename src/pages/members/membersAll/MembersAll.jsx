import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Pagination from '@mui/material/Pagination';

import * as S from './MembersAll.style';
import MemberCard from '../../../components/membercard/MemberCard';
import { MEMBERS } from '../../../constants/members';
import { BROWSER_PATH } from '../../../constants/path';
import defaultWomanUrl from '../../../assets/img/defaultWoman.webp';
import defaultManUrl from '../../../assets/img/defaultMan.webp';

const MembersAll = () => {
  const [year, setYear] = useState(0);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const membersPerPage = 10;

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
      <S.Title>MEMBERS</S.Title>
      <S.FormControlStyle>
        <InputLabel id='member-year'>전체</InputLabel>
        <Select
          labelId='member-year-select-label'
          id='member-year-select'
          value={year}
          label='year'
          onChange={handleChange}
        >
          <MenuItem value={0}>전체</MenuItem>
          <MenuItem value={3}>3기</MenuItem>
          <MenuItem value={4}>4기</MenuItem>
        </Select>
      </S.FormControlStyle>
      <S.MemberContainer>
        {displayedMembers.map(({ name, year, part, sex, id }) => (
          <MemberCard
            key={id}
            size='l'
            name={name}
            th={year}
            department={part}
            imgurl={sex === 'w' ? defaultWomanUrl : defaultManUrl}
            onClick={() => {
              navigate(`${BROWSER_PATH.MEMBERS.BASE}/${id}`);
            }}
          />
        ))}
      </S.MemberContainer>
      <Pagination
        count={Math.ceil(filteredMembers.length / membersPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </S.Container>
  );
};

export default MembersAll;
