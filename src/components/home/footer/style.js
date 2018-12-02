import styled from "styled-components";

const Footer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40vh;
  background-color: #f8f9fb;
`;

const text = styled.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
`;

const author = styled.span`
  padding: 5px 10px;
  background-color: white;
  box-shadow: 0px 1px 9px #d4dce4;
  border-radius: 25px;
`;

const img = styled.img`
  width: 100px;
`;

Footer.text = text;
Footer.img = img;
Footer.author = author;

export { Footer };
