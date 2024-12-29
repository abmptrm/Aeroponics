import { useState } from "react";
import { Button, Navbar } from "flowbite-react";
import Logo from '../assets/leaf.png';

function NavbarComponent() {

    const [activeLink, setActiveLink] = useState("Home");

    const handleSetActive = (name) => {
        setActiveLink(name);
    };

    return (
        <Navbar fluid rounded className="bg-satu z-10">
            <Navbar.Brand href="https://flowbite-react.com" className="px-2 py-3">
                <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Aeroponics" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Aeroponics</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Button className="hidden md:block bg-lima">Get started</Button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                {["Home", "About", "Services", "Pricing", "Contact", "Project"].map((link) => (
                    <Navbar.Link
                        key={link}
                        href="#"
                        onClick={() => handleSetActive(link)}
                        style={{ 
                            .active:hover {
                                
                            }
                        }}
                        className={`rounded-md !hover:text-lima !md:hover:text-lima text-md md:text-[1.2em] text-center my-[0.2rem] ${activeLink === link
                            ? "text-lima font-semibold"
                            : "!hover:text-lima"
                            }`}
                    >
                        {link}
                    </Navbar.Link>
                ))}
                <Button className="my-3 block md:hidden bg-lima">Get started</Button>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;
