import styled from 'styled-components';
import darkModeIcon from '../assets/icons/icon-dark-mode.svg';
import lightModeIcon from '../assets/icons/icon-light-mode.svg';

const ModeSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModeSelect = styled.button`
  width: 48px;
  height: 24px;
  background: #5a6069;
  border-radius: 14.5px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  border: none;
`;

const ModeSelectButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
`;

export default function ModeSelector() {
  return (
    <ModeSelectContainer>
      <img src={darkModeIcon} alt="dark mode icon" />
      <ModeSelect>
        <ModeSelectButton />
      </ModeSelect>
      <img src={lightModeIcon} alt="light mode icon" />
    </ModeSelectContainer>
  );
}
