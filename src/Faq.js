import React, { useState } from 'react';
import {
  Box,
  Text,
  Flex,
  Heading,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
const Faq = ({ index, setIndex }) => {
  const [question, setQuestion] = useState([
    {
      id: 1,
      question: 'What can I do here?',
      answer:
        "This is the E-commerce Support's frequently asked questions. You can ask questions about creating an account, order payment options, checking the status of your order or return requests.",
    },
    {
      id: 2,
      question: 'How do I create an account?',
      answer:
        'You can create your account by entering and verifying your mobile number. Click on "Create New Account" after that and fill up the form to create your account.',
    },
    {
      id: 3,
      question: 'How can I pay for my order?',
      answer:
        'We support the following payment options:\n Cash On Delivery (available in selected pin codes), \nCredit Card, \nDebit Card, \nNet banking and \nGift Card.',
    },
  ]);
  return (
    <Flex direction="column" p="4">
      <Box mb="8">
        <Heading size="md">LALA Land</Heading>
      </Box>
      <Accordion allowToggle index={index}>
        {question.map(q => {
          return (
            <AccordionItem key={q.id} name={`accordion-Item-${q.id}`}>
              <AccordionButton onClick={() => setIndex(q.id - 1)}>
                <Box flex="1" textAlign="left">
                  <Text fontWeight="semibold">{q.question}</Text>
                </Box>
              </AccordionButton>
              <AccordionPanel pb="4">{q.answer}</AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Flex>
  );
};

export default Faq;
