import styled from 'styled-components';

export const StageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: -1;

  .stage {
    transition: all 200ms linear;
    border-right: 1px dotted #333;
    flex: 1;
    display: flex;
    flex-direction: column;
    .divider {
      border-bottom: 1px dotted #333;
      flex: 1;
    }
  }

  .particles {
    width: 2px;
    height: 6px;
    z-index: 12;
    background-size: cover;
    position: fixed;
    top: 0%;
    background-color: #333;
    border-radius: 3px;
    animation: rain-drop 10s linear infinite backwards;
  }

  @keyframes rain-drop {
    from {
      margin-top: -5%;
    }
    to {
      margin-top: 90%;
    }
  }
`;
