import styled from "styled-components";
import { Button, Typography } from "../../../_shared/components";
import React from "react";

export const Thumbnail1Styled = styled.div`
  background: #d87d4a;
  display: flex;
  gap: 140px;
  align-items: center;
  padding: 133px 95px;
  overflow: hidden;

  h2 {
    color: white;
    margin-bottom: 24px;
    font-size: 56px;
  }

  p {
    max-width: 350px;
    color: rgba(255, 255, 255, 0.75);
    margin-bottom: 40px;
  }

  .img-container {
    max-width: 400px;

    img {
      width: 100%;
      margin-bottom: -200px;
    }
  }
`;

/*<Thumbnail1Styled>
    <Typography variant={"h2"}>ZX9 SPEAKER</Typography>
    <Typography variant={"body1"}>
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
    </Typography>
    <Button variant={"black"}>see product</Button>
</Thumbnail1Styled>*/
