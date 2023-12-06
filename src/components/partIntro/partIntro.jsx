import { PART_INFOS } from '../../constants/part';
import { useState } from 'react';
import { motion } from 'framer-motion';

import * as S from './partIntro.style';

function PartIntro() {
  const [selectedPart, setSelectedPart] = useState({ part: '기획' });

  const transition = {
    duration: 0.8,
    ease: [0.6, -0.05, 0.01, 0.9]
  };

  const textReveal = {
    initial: {
      y: '200%',
      opacity: 0
    },
    animate: {
      y: '0%',
      opacity: 1
    }
  };
  const handleButtonClick = part => {
    setSelectedPart(part);
  };

  return (
    <S.Container>
      <S.PartBox>
        <S.PartNav>
          {PART_INFOS.map(info => (
            <S.CategoryBox
              key={info.part}
              onClick={() => handleButtonClick(info)}
              className={selectedPart.part === info.part ? 'selected' : ''}
            >
              <span>{info.part}</span>
            </S.CategoryBox>
          ))}
        </S.PartNav>
        <S.PartContents>
          <motion.div>
            {selectedPart && (
              <motion.div
                variants={textReveal}
                initial='initial'
                animate='animate'
                transition={{ ...transition, delay: 1.4 }}
              >
                {
                  PART_INFOS.find(info => info.part === selectedPart.part)
                    .description
                }
              </motion.div>
            )}
          </motion.div>
        </S.PartContents>
      </S.PartBox>
    </S.Container>
  );
}

export default PartIntro;
