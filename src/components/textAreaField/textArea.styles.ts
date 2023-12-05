import styled from '@emotion/styled';
import { TextareaAutosize } from '@mui/base';

export const StyledTextarea = styled(TextareaAutosize)(
	({ theme }: { theme : any}) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 16.5px 14px;
    border-radius: 5px;
    color: ${theme.palette.text.primary};
    background:  ${theme.palette.background.paper};
  
    &:hover {
      border-color: ${theme.palette.text.primary};
    }
  
    &:focus {
      border-color: ${theme.palette.text.primary};
    }

  `
);
