import React from "react"
import PropTypes from "prop-types"

import Label from "../../core/Label";

import { CardWrapper, MainText, InfoBox, LabeledInfo, Info } from "./Card.styled"

const Card = ({ text, category, level, date }) => (
  <CardWrapper>
    <MainText>{text}</MainText>
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

Card.propTypes = {
  children: PropTypes.node,
}

export default Card
