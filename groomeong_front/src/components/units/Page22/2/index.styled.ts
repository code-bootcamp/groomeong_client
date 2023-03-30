import styled from "@emotion/styled";
import * as GS from "../../../../../theme/global";

export const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f4f4f4;
  color: #08182b;
`;

export const Wrapper = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: row;
  align-items: center;
`;
export const Wrapper_left = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Left_Img = styled.img`
  width: 520px;
  height: 520px;
  border-radius: 50%;
`;

export const Wrapper_right = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Right_subText = styled.span`
  font-size: 23px;
  font-weight: 600;
  color: #ee2560;
`;

export const Right_title = styled.span`
  font-size: 50px;
  font-weight: 700;
  position: relative;
`;
export const Right_bottomText = styled.span`
  color: #bfbfbf;
  font-size: 18px;
  font-weight: 500;
  padding-top: 20px;
`;
