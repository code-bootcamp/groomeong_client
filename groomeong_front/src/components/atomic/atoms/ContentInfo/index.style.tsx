import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

interface IContentInfoWrapperProps {
  left?: string;
  right?: string;
  bottom?: string;
  top?: string;
}

export const ContentInfoWrapper = styled.div<IContentInfoWrapperProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ bottom }) => bottom ?? "64px"};
  margin-left: ${({ left }) => left ?? "0"};
  margin-right: ${({ right }) => right ?? "0"};
  margin-top: ${({ top }) => top ?? "0"};
`;

export const ContetnInfoLabel = styled.span`
  display: inline-block;
  color: ${GS.contents.contentSecondary};
  padding-bottom: 32px;
  ${GS.Label.Medium}
`;

export const ContentInfoContent = styled.span`
  display: inline-block;
  color: ${GS.contents.contentPrimary};
  ${GS.Paragraph.Large}
`;
