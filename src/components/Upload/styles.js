import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: #00ae00;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: 'dropzone'
})`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColor = {
  default: '#999',
  error: '#e57878',
  success: '#00ae00'
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColor[props.type || 'default']};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;