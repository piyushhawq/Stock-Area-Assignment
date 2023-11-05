import {Link} from 'react-router-dom';
import Button from '../UI/Button';
import styles from './WarehouseList.module.css';
const WarehouseList = ({id,name,city,type,cluster,code}) =>{
//  console.log("clusture",id,name,city,type,cluster,code)
    return(
        <div className={styles.list} key={id}>
            <h3>WAREHOUSE</h3>
        <div className={styles.items}>
            <h4>Name : </h4>
            <p>{name}</p>
        </div>
        {/* <div className={styles.items}>
            <h4>Code : </h4>
            <p>{code}</p>
        </div> */}
        <div className={styles.items}>
        <h4>Type : </h4>
            <p>{type}</p>
        </div>
        <div className={styles.items}>
        <h4>Cluster : </h4>
            <p>{cluster}</p>
        </div>
        <div className={styles.items}>
        <h4>City : </h4>
            <p>{city}</p>
        </div>
       <Link to={`${id}`} relative='path'><Button>View</Button></Link>
        </div>
    )
}

export default WarehouseList;