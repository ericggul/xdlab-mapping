import { useState, useEffect } from "react";
import * as S from "./styles";
import { useSearchParams } from "next/navigation";

const PARAMS = {
  left: {
    heightVh: 58.2,
    topVh: 13.6,
    widthVw: 99.5,
    leftVw: 0,
  },
  right: {
    heightVh: 53.8,
    topVh: 4.9,
    widthVw: 78.3,
    leftVw: 5.4,
  },
};

export default function ScreenFrame() {
  const searchParams = useSearchParams();
  const side = searchParams.get("side");
  const [isTest, setIsTest] = useState(true);
  const [url, setUrl] = useState("");
  const [isUrlSubmitted, setIsUrlSubmitted] = useState(false);

  // Initialize state values based on side from PARAMS, fallback to dashboard values
  const [heightVh, setHeightVh] = useState(PARAMS[side]?.heightVh || PARAMS.left.heightVh);
  const [topVh, setTopVh] = useState(PARAMS[side]?.topVh || PARAMS.left.topVh);
  const [widthVw, setWidthVw] = useState(PARAMS[side]?.widthVw || PARAMS.left.widthVw);
  const [leftVw, setLeftVw] = useState(PARAMS[side]?.leftVw || PARAMS.left.leftVw);

  // Update values when side changes
  useEffect(() => {
    if (side && PARAMS[side]) {
      setHeightVh(PARAMS[side].heightVh);
      setTopVh(PARAMS[side].topVh);
      setWidthVw(PARAMS[side].widthVw);
      setLeftVw(PARAMS[side].leftVw);
    }
  }, [side]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      setIsUrlSubmitted(true);
    }
  };

  if (!isUrlSubmitted) {
    return (
      <S.Wrapper>
        <S.UrlInputContainer onSubmit={handleSubmit}>
          <S.UrlInput type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter URL to display" required />
          <S.SubmitButton type="submit">Display</S.SubmitButton>
        </S.UrlInputContainer>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.IFrame
        src={url + (side || "")}
        frameBorder="0"
        style={{
          height: `${heightVh}vh`,
          top: `${topVh}vh`,
          width: `${widthVw}vw`,
          left: `${leftVw}vw`,
        }}
      />
      {isTest && (
        <S.DebugControls>
          <S.ControlsContainer>
            <div>
              <label>Height (vh): {heightVh}</label>
              <input type="range" min="0" max="100" step="0.1" value={heightVh} onChange={(e) => setHeightVh(Number(e.target.value))} />
            </div>
            <div>
              <label>Top Position (vh): {topVh}</label>
              <input type="range" min="0" max="100" step="0.1" value={topVh} onChange={(e) => setTopVh(Number(e.target.value))} />
            </div>
            <div>
              <label>Width (vw): {widthVw}</label>
              <input type="range" min="0" max="100" step="0.1" value={widthVw} onChange={(e) => setWidthVw(Number(e.target.value))} />
            </div>
            <div>
              <label>Left Position (vw): {leftVw}</label>
              <input type="range" min="0" max="100" step="0.1" value={leftVw} onChange={(e) => setLeftVw(Number(e.target.value))} />
            </div>
          </S.ControlsContainer>
          <S.CloseButton onClick={() => setIsTest(false)}>Close</S.CloseButton>
        </S.DebugControls>
      )}
    </S.Wrapper>
  );
}
