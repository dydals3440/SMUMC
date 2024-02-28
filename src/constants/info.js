import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ForumIcon from '@mui/icons-material/Forum';
import { Instagram } from '@mui/icons-material';

const FOOTER_INFOS = [
  { icon: EmailIcon, text: 'dydals3440@gmail.com' },
  { icon: LocationOnIcon, text: '서울특별시 종로구 홍지문2길 20 상명대학교' }
];

const SOCIAL_INFOS = [
  { icon: ForumIcon, url: 'https://open.kakao.com/o/s0svOsWf' },
  { icon: Instagram, url: 'https://www.instagram.com/smu_makeus_challenge/' }
];

const NEWS_INFOS = [
  {
    id: 1,
    title: 'UMC 5기 데모데이',
    description:
      'UMC 5기 방학 프로젝트가 2024 방학 중 진행됩니다. KISS 지부 아이디어를 토대로한 PM 챌린저의 기획 소개를 통해 여러 차례에 걸쳐 개발자가 매칭됩니다. 1차 매칭은 12월 10일(일)에 시작됩니다. 많은 관심 바랍니다!',
    image: '/images/demoday.webp'
  },
  {
    id: 2,
    title: '5th UMC iOS Conference',
    description:
      'iOS를 같이 공부하고 있는 사람들의 이야기도 들으며 행사에 참여한 다른 챌린저들과 의미 있는 시간을 가져볼 수 있으면 좋겠습니다.',
    image: '/images/conference.webp'
  }
];

const FAQS_TEXT = [
  {
    question: 'UMC에 지원할려면 필요한 조건이 있나요?',
    answer:
      '없습니다. 열심히 끝까지 함께하고자 하는 의지만 있으시면 누구나 지원하실 수 있습니다.'
  },
  {
    question: '정말 제가, 3개월 학습해서 데모데이에 참여할 수 있나요??',
    answer:
      '실제로, 처음 UMC에서 학습하더라도, 스터디와, 개인 공부를 꾸준히하여 성장해서 데모데이때 뛰어난 성과를 내신 선배기수분들이 다수 계십니다!! 하지만 그래도 열심히 학습하셔야겠죠?'
  },
  {
    question: '스터디는 어떤 방식으로, 몇시간 정도 진행되는지 알고 싶습니다!',
    answer:
      '팀별로, 다르기 떄문에 정확하게 말씀드리기는 어렵지만, 평균적으로 주에 1~2시간정도 스터디를 진행한 후, 중앙에서 주어지는 워크북을 함께 내용들을 공유합니다.'
  },
  {
    question: '파트장님들의 실력은 어떤지 알고 싶습니다.',
    answer:
      '대부분 이전기수에서 성실하면서 좋은 성과를 내신 분으로 선정하였고, 이전 기수가 아니시라면 특정 기준 판별하에, 잘하시는 분을 위주로 선정하였으니 너무 걱정안하셔도 좋습니다.'
  },
  {
    question: '데모데이에 불참해도 수료가 가능한가요?',
    answer: '데모데이에 불참하시면 UMC 수료가 어려우십니다.'
  },
  {
    question: 'UMC에 합격하면, 데모데이를 무조건 참여할 수 있나요?',
    answer:
      '아닙니다. UMC에 주어진 모든 활동들을 성실하게 수행하셔야 참여가 가능합니다. UMC는 3-OUT 제도를 운영하므로 모든 활동에 성실하게 참여해야, 데모데이에 참여하실 수 있는 자격을 얻게 됩니다.'
  },
  {
    question:
      '합격해도, 제가 커리큘럼을 잘 따라갈 수 있을지 걱정됩니다, 데모데이때 피해를 주지 않을까 걱정됩니다.',
    answer:
      '본인의 실력이 부족하거나, 처음 접하시는 분야이더라도, 스터디 이외에 개인적인 시간을 많이 할애하여, 학습하신다면 충분히 데모데이를 성공적으로 마칠 수 있을 겁니다.'
  }
];

export { FOOTER_INFOS, NEWS_INFOS, SOCIAL_INFOS, FAQS_TEXT };
