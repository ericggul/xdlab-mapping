import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const IFrame = styled.iframe`
  width: 100%;
  position: absolute;
  left: 0;
`;

export const DebugControls = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 20px;
  border-radius: 8px;
  color: white;
  z-index: 1000;
  display: flex;
  gap: 20px;

  div {
    margin: 10px 0;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #ffffff;
  }

  input[type="range"] {
    -webkit-appearance: none;
    width: 200px;
    height: 4px;
    background: #333;
    border-radius: 2px;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.1);
      }
    }

    &::-moz-range-thumb {
      width: 16px;
      height: 16px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      border: none;
      transition: all 0.2s;

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: scale(1.1);
      }
    }
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CloseButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  height: fit-content;
  margin-top: 10px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;

export const UrlInputContainer = styled.form`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const UrlInput = styled.input`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  width: 400px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: white;
    background: rgba(255, 255, 255, 0.15);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.05);
  }
`;
