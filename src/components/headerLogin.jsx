const Header = ({titulo}) => {
    return (
        <div>
            <h1 className="text-light d-flex justify-content-center p-3 title-font">{titulo}</h1>
            <h3 className="text-light d-flex justify-content-center p-3">Para formar tu propia liga primero necesitas acceder</h3>
        </div>
    )
}
 
export default Header;