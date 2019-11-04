import React from "react";
import "./styles/footer.css";

function Footer() {
return (
    <div>
        <footer className="sticky-footer bg-white">
            <div className="container my-auto text-center">
                <span className="copyright text-center my-auto">Copyright &copy; {(new Date().getFullYear())} Request Wheel</span>
            </div>
        </footer>
    </div>
)
}

export default Footer;