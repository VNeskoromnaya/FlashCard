import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-wrapper">
                {/* <img src="logo.png" alt="logo"/> */}
                <img src="https://s.057.ua/section/cataloglogo/upload/images/catalog/000/001/514/catgotovyj_5e30544dd8fcf.png" alt="logo" />
                <p className='name-company-header'><span className='name-company__span'>FlashCards</span> is an application <br/>for foreign words learning.</p>
            </div>
        </div>
    )
}

export default Header;