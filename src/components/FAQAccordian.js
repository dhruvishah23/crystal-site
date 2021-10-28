import React, { useState } from 'react';
import { Data } from './FAQData';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';


{/** Accordian component set up
used in FAQ.js */}


{/**  div background that accordian is on*/}
const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100vh;
  background: #fff;
`;

{/** accordian container  */}
const Container = styled.div`
  position: absolute;
  margin-top: -190px;
  
`;

{/** accordian styling for question box */}
const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.5rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

{/** accordian styling for answer box */}
const Dropdown = styled.div`
  background: #fbfbfb;
  color: #000;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  p {
    font-size: 1rem;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      {/**if clicked question is already active, then close it */}
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#000', size: '25px' }}>
        <AccordionSection>
          <Container>
            {Data.map((item, index) => {
              return (
                <>
                {/** show answer when 'plus' symbol is clicked  */}
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                  {/** when answer visible, chnage 'plus' symbol to 'minus' */}
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Container>
        </AccordionSection>
      </IconContext.Provider>
    </>
  );
};

export default Accordion;