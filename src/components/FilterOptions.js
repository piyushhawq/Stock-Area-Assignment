import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterOptions.module.css";
import { filterActions } from "../store/filterSlice";
import FilterOptionsMob from "./FilterOptionsMob";
import { dataActions } from "../store/dataSlice";
import img from '../assets/slider.png';

const FilterOptions = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.data.cities);
  const clusters = useSelector((state) => state.data.clusters);
  const spaces = useSelector((state) => state.data.spaces);
  const showModal = useSelector((state) => state.data.showModal);

  return (
    <div className={styles.filterContainer}>
      <h3>Filter By</h3>
      <h5 onClick={()=> {dispatch(dataActions.setShowModal())}}>Filter <img src={img} alt="filter button" /></h5>
      {showModal && <FilterOptionsMob/>}
      <div className={styles.filterName_container}>
        <div className={styles.filterName}>
          <h4>City</h4>
          <div>
            {cities.map((city) => (
              <p
                key={city}
                onClick={() => {
                  dispatch(filterActions.filterByCity(city));
                }}
              >
                {city}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.filterName}>
          <h4>Cluster</h4>
          <div>
            {clusters.map((cluster) => (
              <p
                key={cluster}
                onClick={() => {
                  dispatch(filterActions.filterByCluster(cluster));
                }}
              >
                {cluster}
              </p>
            ))}
          </div>
        </div>
        <div className={styles.filterName}>
          <h4>Space Availability Linit</h4>
          <div>
            {spaces.map((space) => (
              <p
                key={space}
                onClick={() => {
                  dispatch(filterActions.filterBySpace(space));
                }}
              >
                {space}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;
