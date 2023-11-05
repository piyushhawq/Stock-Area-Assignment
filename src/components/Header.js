
import { filterActions } from '../store/filterSlice';
import styles from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Header = () =>{
    const input = useSelector(state => state.filter.input);
    const dispatch = useDispatch();
    const inputChangeHandler = (event) =>{
        dispatch(filterActions.searchInput(event.target.value));
    }

    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>Warehouse Management</h1>
                <div>
                    <input type="text" placeholder="Search by Name,City,Cluster..." value={input} onChange={inputChangeHandler} style={{width:"30vw"}}/ >
                </div>
            </div>
        </header>
    )
}

export default Header;