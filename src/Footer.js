const Footer = () =>{
    const currentYear = new Date();
    return(
        <footer className="footerBar">
            <span>Copyright @{currentYear.getFullYear()}</span>
        </footer>
    )
}

export default Footer;