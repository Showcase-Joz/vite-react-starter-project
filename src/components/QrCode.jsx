import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { QRCodeSVG } from "qrcode.react";

import styled from "styled-components";

const QrCodeWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  row-gap: 60px;
  justify-items: center;

  .code {
    width: 100%;
    height: auto;
    max-width: 300px;
  }

  .string-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      display: inline;
      justify-self: center;
      width: fit-content;
      font-variant: small-caps;
      padding: 4px 8px;
      color: #303030;
      background-color: white;
      line-height: 1.2;
      margin-bottom: 0.7rem;
    }
    .uuid {
      font-family: monospace;
      font-style: italic;
      background-color: #585858;
      color: #9acd32;
      border-radius: 3px;
      padding: 4px 8px;
    }
  }
  .description {
    font-weight: 300;
    text-align: left;
    border: 2px solid #505050;
    background-color: #383838;
    border-radius: 3px;
    padding: 20px;
    max-width: 700px;

    p {
      color: #f5f5f5;
    }
  }
`;

const QrCode = ({ viteLogo }) => {
  const uniqueId = uuidv4();
  const imgSet = {
    src: viteLogo,
    height: 100,
    width: 100,
    y: null,
    x: null,
    excavate: true,
  };
  return (
    <QrCodeWrapper>
      <QRCodeSVG
        className="code"
        value={uniqueId}
        size={512}
        bgColor="#ffffff00"
        fgColor="#F0FFF0"
        includeMargin={false}
        imageSettings={imgSet}
      ></QRCodeSVG>

      <div className="string-wrapper">
        <span className="title">your unique id:</span>
        <div className="uuid">{uniqueId}</div>
      </div>

      <div className="description">
        <p>
          Automatically generated at reception desk as part of the check-in
          process. Guests will be encouraged to scan the code, taking them to
          the (newly generated) user page of onLounger to continue registration.
        </p>
      </div>
    </QrCodeWrapper>
  );
};

QrCode.propTypes = {
  viteLogo: PropTypes.string,
};

export { QrCode };
