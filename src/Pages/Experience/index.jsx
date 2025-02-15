import AnchorLink from "react-anchor-link-smooth-scroll";
import Modal from "../../Components/Modal";
import Banner from "../../Components/Banner";
import CardExperience from "./CardExperience";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FETCH_ALL_DATA_EXPERIENCE,
  FETCH_ALL_DATA_CARD,
  ADD_CART,
} from "../../store/action";

import styles from "./Experience.module.scss";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState([]);
  const [cityId, setCityId] = useState(24);
  const [showBanner, setShowBanner] = useState(false);

  const dispatch = useDispatch();

  const experience = useSelector((state) => state.experience);
  const infoCity = useSelector((state) => state.card);
  const cart = useSelector((state) => state.cart);

  const info = infoCity.filter((el) => el.id == cityId);

  const handleOpen = (uuid) => {
    setIsClicked(experience.data.find((idCard) => idCard.uuid === uuid));
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setIsClicked([]);
  };

  useEffect(() => {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_EXPERIENCE(cityId));
    dispatch(FETCH_ALL_DATA_CARD());
  }, [cityId]);

  const addToCart = () => {
    if (cart.length === 0) {
      dispatch(
        ADD_CART({
          id: `${isClicked.uuid}`,
          image: `${isClicked.cover_image_url}`,
          title: `${isClicked.title}`,
          price: `${isClicked.retail_price.value}`,
          quantity: 1

        })
      );
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 2000);
    } else {
      if (cart.some((cart) => cart.title === isClicked.title)) {
      } else {
        dispatch(
          ADD_CART({
            id: `${isClicked.uuid}`,
            image: `${isClicked.cover_image_url}`,
            title: `${isClicked.title}`,
            price: `${isClicked.retail_price.value}`,
            quantity: 1

          })
        );
        setShowBanner(true);
        setTimeout(() => {
          setShowBanner(false);
        }, 2000);
      }
    }
  };

  return (
    <div className={styles.prova_container}>
      {modalOpen && (
        <Modal
          event={isClicked}
          discover={false}
          image={isClicked.cover_image_url}
          title={isClicked.title}
          price={isClicked.retail_price.value}
          description={isClicked.description}
          city={isClicked.city.name}
          handleClose={handleClose}
          Add={addToCart}
        />
      )}
      {showBanner && <Banner />}

      <div className={styles.container_hero}>
        <div className={styles.heroMain}>
          <div className={styles.title}>
            <h1>
              Your Experience,
              <br />
              your life.
            </h1>
            <p>Le migliori esperienze selezionate per te.</p>
          </div>
          <div className={styles.cityList}>
            <ul>
              <AnchorLink href="#city">
                <li onClick={() => setCityId(24)}>PALERMO</li>
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(15)}>CATANIA</li>
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(572)}>MESSINA</li>
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(587)}>TRAPANI</li>
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(265)}>AGRIGENTO</li>
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(147)}>SIRACUSA</li>
              </AnchorLink>
            </ul>
          </div>
        </div>
      </div>

      <div id="city" className={styles.container_two}>
        <div className={styles.sectionCity}>
          <div className={styles.sectionHeader}>
            <h1>{info[0]?.title}.</h1>
            <Link to={`/city/${cityId}`}>
              <button>scopri di più sulla città</button>
            </Link>
          </div>

          <div className={styles.sectionCard}>
            {experience.data?.map((item, index) => (
              <CardExperience
                key={index}
                uuid={item.uuid}
                event={item}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
