import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const FOOTER_INFOS = [
  { icon: EmailIcon, text: 'dydals3440@gmail.com' },
  { icon: LocationOnIcon, text: '서울특별시 종로구 홍지문2길 20 상명대학교' },
  { icon: LocalPhoneIcon, text: '02-xxx-xxxx' }
];

const ACTIVITY_INFOS = [
  {
    id: 1,
    title: '스터디',
    description: '매 학기마다 새로운 주제를 선정해 스터디를 진행합니다.',
    image: '/public/images/contest.webp'
  },
  {
    id: 2,
    title: '워크샵',
    description:
      '방학 시기에 맞춰 구성원 간의 친목을 위한 단체 워크샵을 진행하고있습니다.',
    image: '/public/images/workshop.webp'
  },
  {
    id: 3,
    title: '홈커밍 데이',
    description:
      '졸업한 선배님들과의 지속적인 교류를 위하여 매년 홈커밍 데이 행사를 진행하고 있습니다.',
    image: '/public/images/homecoming.webp'
  }
];

export { FOOTER_INFOS, ACTIVITY_INFOS };
