import  React from 'react';
function Header (props){
    return (
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" target="_self"  className="brand-logo">
                    {props.title}
                </a>
            </div>
        </nav>
    );
};
export default Header;