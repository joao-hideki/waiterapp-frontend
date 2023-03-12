import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    color: #fff;

    h1 {
      font-size: 32px;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;