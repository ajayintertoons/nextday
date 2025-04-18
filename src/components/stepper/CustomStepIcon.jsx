// CustomStepIcon.js
import { styled } from '@mui/material/styles';
import { StepIcon } from '@mui/material';
import { TiTick } from "react-icons/ti";

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  width: 22,
  height: 22,
  borderRadius: '50%',
  backgroundColor: ownerState.completed
    ? '#1BA169' // Color for completed steps
    : ownerState.active
    ? '#1BA169' // Color for active step
    : '#eaeaf0', // Color for default state
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  boxShadow: ownerState.active ? '0 4px 6px rgba(0,0,0,0.1)' : 'none',
}));

export const CustomStepIcon = (props) => {
  const { active, completed, className, icon } = props;

  return (
    <CustomStepIconRoot
      className={className}
      ownerState={{ active, completed }}
    >
      {completed || active ? <TiTick /> : ""}
    </CustomStepIconRoot>
  );
};


