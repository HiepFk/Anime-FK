import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">ABOUT</div>
      </div>
      <div className="about">
        <div className="desc_mini">
          Luffy is the captain of the Straw Hat Pirates and is best friends with
          all of them and values them over all else. At first glance, Luffy does
          not appear to be very intelligent, often seeing things in a childish
          manner and can easily be amazed by the simplest things. However,
          because he views the world in a straightforward and simple manner, he
          is occasionally the only person who can see past the events and see
          what should be done.
        </div>
        <div className="desc_mini">
          Luffy seems to have an unstoppable appetite, a characteristic that is
          common to the Japanese archetype of the (at times simple-minded) young
          male hero/adventurer with a heart of gold; perhaps the hunger more so
          in Luffy's case due to having an elastic stomach. Luffy is also
          another one of the several characters given the middle initial "D."
        </div>
        <div className="desc_mini">
          Although Luffy is fairly lightheaded and a funny character, he has an
          unstoppable sense of determination, optimism, and commitment and will
          do anything to stand up for his friends and comrades. Along with that,
          he has great courage to back it up as well as unbelievable strength.
          Ever since consuming the devil fruit he was shown to be not worried
          about his inability to swim, much like his brother. Much of these
          traits are common among D's. His only display of true fear is towards
          his grandfather, to the point that he is intimidated at the mere
          mention of him
        </div>
        <div className="desc_mini">
          Luffy never kills any of his enemies, no matter how cold-hearted they
          are; instead, he frequently sends the villain flying, knocking them
          out or beating them to a point that they are almost near death, which
          results in some of the villains searching for revenge, such as Buggy
          the Clown and Alvida. Oda explains that it's not a question of
          morality so much as a matter of punishing the villains for their
          crimes - he feels that killing the villains lets them off too lightly,
          whereas he considers letting them live to see their dreams be ruined a
          far more fitting punishment.
        </div>
        <div className="desc_mini">
          Luffy's dream is to find the One Piece and become Pirate King. He
          knows that to achieve his goal, he will have to defeat many strong
          opponents, including the World Government and his childhood hero
          Shanks.
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: white;
  margin-top: 2rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .pillar {
    width: 0.2rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  .desc_mini {
    margin-left: 1rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;
export default About;
