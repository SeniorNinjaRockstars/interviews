import React from "react"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"

import Label from "../../core/Label";
import CodeStyle from "../../core/CodeStyle";

import { CardWrapper, MainText, InfoBox, LabeledInfo, Info } from "./QuestionCard.styled"

const QuestionCard = ({ text, category, level, date }) => (
  <CardWrapper>
    <MainText>
      <CodeStyle>
        <ReactMarkdown source={text} />
      </CodeStyle>
    </MainText>
    <InfoBox>
      <LabeledInfo>
        <Label as="p">Category</Label>
        <Info>{category}</Info>
      </LabeledInfo>
      <LabeledInfo>
        <Label as="p">Level</Label>
        <Info>{level}</Info>
      </LabeledInfo>
      <LabeledInfo>
        <Label as="p">Posted</Label>
        <Info>{date}</Info>
      </LabeledInfo>
    </InfoBox>
  </CardWrapper>
)

QuestionCard.propTypes = {
  text: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default QuestionCard
