import './header.scss';


const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                <img src="/img/logo.png" alt="logo"/>
                <p><span className='name-company__span'>FlashCards</span> is an application <br/>for foreign words learning.</p>
            </div>
        </div>
    )
}

export default Header;