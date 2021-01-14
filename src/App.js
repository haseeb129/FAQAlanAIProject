import React, { useEffect, useRef, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './Navbar';
import Faq from './Faq';
import alanBtn from '@alan-ai/alan-sdk-web';
import { scroller } from 'react-scroll';
const App = () => {
  const alanBtnInstance = useRef(null);
  const [index, setIndex] = useState(null);
  const [colorFlag, setColorFlag] = useState(false);

  useEffect(() => {
    if (!alanBtnInstance.current) {
      alanBtnInstance.current = alanBtn({
        key:
          'a5cc6882aca94dab7ebaf3cbeedf820b2e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: commandData => {
          if (commandData.command === 'gotoFaq') {
            scroller.scrollTo(`accordion-Item-${commandData.faqId}`, {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuard',
            });
            setIndex(commandData.faqId - 1);
          } else if (commandData.command === 'changeColorMode') {
            setColorFlag(colorFlag => !colorFlag);
          }
        },
      });
    }
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar colorFlag={colorFlag} />
      <Faq index={index} setIndex={setIndex} />
    </ChakraProvider>
  );
};

export default App;
