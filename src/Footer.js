const Footer = () =>{
    const currentYear = new Date();
    return(
        <footer className="footerBar">
            <p>Copyright @{currentYear.getFullYear()}</p>
        </footer>
    )
}

export default Footer;