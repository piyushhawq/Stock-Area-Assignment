import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="header" style={{height:"75px",backgroundColor:"#f1f1f1",boxShadow:"revert"}}>
            <div className="logo" style={{position:"absolute",top:"15px",left:"20px"}}>
                <Link to="/">
                    <img src="https://stockarea.io/assets/user/images/header/logo.png" alt="logo" />
                </Link>
            </div>
        </header>
    )
}