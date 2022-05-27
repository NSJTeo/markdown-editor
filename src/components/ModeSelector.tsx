import styled from 'styled-components';
import darkModeIcon from '../assets/icons/icon-dark-mode.svg';
import lightModeIcon from '../assets/icons/icon-light-mode.svg';
import darkModeIconActive from '../assets/icons/icon-dark-mode-active.svg';
import lightModeIconActive from '../assets/icons/icon-light-mode-active.svg';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const ModeSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ModeSelectButton = styled.button`
  width: 48px;
  height: 24px;
  background: #5a6069;
  border-radius: 14.5px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  padding: 6px;
  border: none;
  cursor: pointer;
  justify-content: ${({ theme }) => theme.modeSelectPosition};
`;

const ModeSelectIcon = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: white;
`;

export default function ModeSelector() {
  const { darkModeOn, darkModeOff } = useActions();
  const { darkMode } = useTypedSelector((state) => state);

  const handleClick = () => {
    if (darkMode) {
      darkModeOff();
    } else {
      darkModeOn();
    }
  };

  return (
    <ModeSelectContainer>
      <img
        src={darkMode ? darkModeIconActive : darkModeIcon}
        alt="dark mode icon"
      />
      <ModeSelectButton onClick={handleClick}>
        <ModeSelectIcon />
      </ModeSelectButton>
      <img
        src={darkMode ? lightModeIcon : lightModeIconActive}
        alt="light mode icon"
      />
    </ModeSelectContainer>
  );
}
