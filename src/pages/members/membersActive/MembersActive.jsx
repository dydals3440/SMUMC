import * as S from "./MembersActive.style";
import { members } from "../../../utils/members";
import MemberCard from "../../../components/membercard/MemberCard";

const MembersActive = () => {
  return (
    <S.Container>
      <S.ImgBanner src="https://images.unsplash.com/photo-1701453031489-2978bc96942f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"/>
      <S.TabContainer>
        <S.TabButton>활동 회원</S.TabButton>
        <S.TabButton >구성원 목록</S.TabButton>
      </S.TabContainer>
      <S.MemberContainer>
        {members.map((item, index) => 
          (item.position === "회장" || item.position === "부회장") && <MemberCard size="m" name={item.name} badge={item.position} imgurl="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"/>
        )}
      </S.MemberContainer>
      <S.MemberContainer>
        {members.map((item, index) => 
          (item.position !== "회장" || item.position !== "부회장") && <MemberCard  size="m" name={item.name} imgurl="https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"/>
        )}
      </S.MemberContainer>
    </S.Container>
  );
};

export default MembersActive;
