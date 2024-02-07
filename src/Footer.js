const Footer = (props) =>{
    const currentYear = new Date();
    return(
        <footer className="footerBar">
            {
                (props.listItem.length > 1) ? (<p>{props.listItem.length} Items</p>) : (<p>{props.listItem.length} Item</p>)
            }
            <span>Copyright @{currentYear.getFullYear()}</span>
        </footer>
    )
}

export default Footer;