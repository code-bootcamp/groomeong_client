import styled from "@emotion/styled";
import * as GS from "../../../../theme/global";
import { InputMiddle } from "../../atomic/atoms/Input/Middle";

interface IValidInput {
  error?: string;
}

export const ValidateInputWrapper = styled.div`
  padding: 32px 0;
  position: relative;
`;
export const Label = styled.label`
  display: block;
  ${GS.Paragraph.Medium}
  color: ${GS.contents.contentSecondary};
  position: absolute;
  top: 0px;
`;

export const ValidationInput = styled.input<IValidInput>`
  outline: none;
  width: 200px;
  border-radius: 12px;
  border: solid 2px
    ${({ error }) => (error ? GS.state.negative : GS.border.borderOpaque)};
  color: ${({ error }) =>
    error ? GS.state.negative : GS.contents.contentPrimary};
  padding: 16px 20px;
  ${GS.Paragraph.Medium}
  &::placeholder {
    color: ${GS.contents.contentTertiary};
  }
  &:focus {
    &::placeholder {
      color: ${GS.base.primary};
    }
    color: ${GS.base.primary};
    border: solid 2px
      ${({ error }) => (error ? GS.state.negative : GS.base.primary)};
    & ~ label {
      color: ${GS.base.primary};
    }
  }
  &:disabled {
    background-color: #f5f5f5;
    border: 2px solid ${GS.gray[100]};
  }
`;

export const ValidateDiv = styled.div`
  display: flex;
  width: 500px;
  justify-content: center;
`;

export const ValidateWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
`;

export const Error = styled.span`
  color: red;
`;

export const EmailInput = styled(ValidationInput)`
  width: 100%;
  &:disabled {
    background-color: #525252;
    color: ${GS.contents.contentSecondary};
  }
`;