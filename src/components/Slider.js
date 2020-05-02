import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import SliderNav from "./SliderNav";
import SliderImg from "./SliderImg";
import { connect } from "react-redux";
import { setUrl } from "../actions/session.action";
import "../styles/Slider.scss";

const Slider = ({ photos, url, setUrl }) => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [animation, setAnimation] = useState(false);

  const prevCount = useCallback(usePrevious(count, url), [count, url]);
  const currUrl = useMemo(() => photos[count].url, [count]);
  const prevUrl = useMemo(() => photos[prevCount].url, [count]);

  const handleAnimationEnd = () => {
    setShow(false);
  };
  const handleBtnClick = (e) => {
    if (url) setUrl(null);

    if (e.target.name === "next") {
      setCount((count + 1) % photos.length);
    } else {
      setCount((count - 1 + photos.length) % photos.length);
    }

    setShow(true);
    setAnimation(!animation);
  };

  useEffect(() => {
    //set url from clicked photo src
    if (url) {
      const photosList = [...photos];
      const index = photosList.findIndex((photo) => photo.url === url);
      setCount(index);
    }
  }, []);

  return (
    <>
      <div className="slider">
        <div className="slider__container">
          <SliderImg
            src={prevUrl}
            classes={["fadeOutA", "fadeOutB"]}
            animationEnd={null}
            animation={animation}
          />
          <SliderImg
            src={currUrl}
            classes={["fadeInA", "fadeInB"]}
            animation={animation}
            animationEnd={handleAnimationEnd}
          />
        </div>
        <SliderNav click={handleBtnClick} disabled={show} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  url: state.session.url,
});
const mapDispatchToProps = (dispatch) => ({
  setUrl: (url) => dispatch(setUrl(url)),
});
function usePrevious(value, isUrl) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  if (!ref.current && !isUrl) return 0;
  else if (!ref.current && isUrl) return value;
  else return ref.current;
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider);
