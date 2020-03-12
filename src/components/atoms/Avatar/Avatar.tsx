import React from "react";
import styled from "styled-components/native";

const StyledAvatar = styled.Image`
  height: 45px;
  width: 45px;
  border-radius: 50px;
`;

interface Props {
  image?: string;
}

const Avatar = ({ image }: Props) => {
  return <StyledAvatar source={{ uri: image }} />;
};

export default Avatar;
