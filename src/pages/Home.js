import React from "react";
import Load from "../components/Load";
import "../styles/Home.scss";
import { connect } from "react-redux";

const Home = ({ homeList }) => {
  let westColImgs;
  let eastColImgs;

  if (homeList) {
    let delay = 0;
    let imagesSort = [...homeList];
    imagesSort = imagesSort.sort((a, b) => a.order - b.order);
    //split images on two columns (west & east)
    imagesSort = imagesSort.map(({ id, url, order }) => {
      delay++;

      return (
        <img
          key={id}
          className="home__image"
          src={url}
          alt="home_img"
          style={{ animation: `showUp 0.8s ${delay / 10}s forwards` }}
          order={order}
        />
      );
    });
    westColImgs = imagesSort.filter((image) => image.props.order % 2 === 0);
    eastColImgs = imagesSort.filter((image) => image.props.order % 2 === 1);

    return (
      <div className="home">
        <div className="home__Col home__Col--west">{westColImgs}</div>
        <div className="home__Col home__Col--east">{eastColImgs}</div>
      </div>
    );
  } else
    return (
      <div className="home__load">
        <Load />
      </div>
    );
};

const mapStateToProps = (state) => ({
  homeList: state.home,
});
export default connect(mapStateToProps)(Home);
