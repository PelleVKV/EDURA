import "./assets/css/App.css";
import React from "react";
import image from './assets/images/EDURA-LOGO.png';
import { CourseEnv } from './components/CourseEnv';
import { CourseTree } from './components/leftbar/CourseTree';
import { Toolbar } from './components/rightbar/Toolbar';

function App() {
    const [isMenuCollapsed, setIsMenuCollapsed] = React.useState(false);
    const [isProfileCollapsed, setIsProfileCollapsed] = React.useState(true);

    const toggleMenu = () => {
        setIsMenuCollapsed(!isMenuCollapsed);
    }

    const toggleProfileMenu = () => {
        setIsProfileCollapsed(!isProfileCollapsed);
    }

    return (
        <div className="flex justify-between w-screen h-screen bg-gray-200 py-2 overflow-hidden">
            <button onClick={toggleMenu} aria-label="Toggle menu" className={`cursor-pointer flex justify-end items-center 
                        absolute top-4 left-0 w-24 h-9 h bg-white rounded-r-xl z-10`}>
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" stroke="gray" strokeWidth="2" d="M9 18l6-6-6-6"/>
                </svg>	
            </button>

            <img src={image} alt="Logo" className="absolute top-4 left-4 w-9 z-30" />

            <div className={`flex flex-col transition-all shadow-2xl duration-300 w-[300px] ${isMenuCollapsed ? '-translate-x-full' : ''} h-full bg-white px-4 py-4 rounded-r-xl z-20`}>
                <div className="flex items-center justify-end transition-all duration-300">
                    <button onClick={toggleMenu} aria-label="Toggle menu" className="cursor-pointer">
                        <svg width="30" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" stroke="black" strokeWidth="1">
                                <line x1="0" y1="2" x2="30" y2="2"/>
                                <line x1="4" y1="8" x2="30" y2="8"/>
                                <line x1="0" y1="14" x2="30" y2="14"/>
                            </g>
                        </svg>
                    </button>
                </div>

                <div className="flex flex-col mt-12">
                    <CourseTree />
                </div>
            </div>

            <div className={`flex flex-col transition-all shadow-2xl duration-300 ${isMenuCollapsed ? 'translate-x-full' : ''} w-[300px] h-full bg-white px-4 py-4 rounded-l-xl z-20`}>
                <div className="flex items-center justify-between">
                    <div className="relative flex flex-row items-center cursor-pointer">
                        <button onClick={toggleProfileMenu} aria-label="collapseProfileMenu" className="flex flex-row items-center cursor-pointer z-30">
                            <div className="w-8 h-8 rounded-full bg-cover bg-center bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAPFBMVEXm5uampqajo6Pa2trp6emhoaHl5eXg4OCoqKjc3Nzf39/W1tatra2wsLDIyMi8vLy2trbExMTOzs61tbXhv6YVAAAEl0lEQVR4nO2d27aqMAxFpYSbioL+/79uEPEGW4WmSepY8+287Tlikza0OZsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKUMcmL4ptUeTDP36JTqc6ted9mTiXOZeU+3N7qja/YtnZHZqyF3ukUy2bQ2ep/ed5Q9tD7V7s7pauPmzjdqS0SebtbpZJk8brSOn5n+g9R/IcqSNVdfZRbyCrq/gcKW+/iN89jm0emSPt9t/7XRz3u6gUqV3md3Fs41Gk/LxcsFM8x/JLpapcI9gplnEkHNqt0huIYTHSbl0Ar2G0r0ipj2CnaL36U+Un2CkaX4tF6SmYJGWhLfGW2jeEXRBrbYk30NFfsFM8mv2d0u7brfZ7MrMJNWfx68m1Vebh+Y32GP2d+pX6F0Wbv9OaTTBJLOZTOvGkmYHsZDCIe0bBJNlr60zgqhQj9ioGca7CntqaYcUbwi6IlbbSM3y1cMRaTcz9zxSvlLY2NozVfsTttKUeWdM9/Ghoq7vInUl7TO1rtgEEk2SrrXWHc9N9x9L2mw5BDA+GDNmr4cXQUkUMkWhMpZoA9b7HUM0vgggmiZ3OqXejex5nZ/Pt+a3iX8NUW+xGyn10Gsjs7EyZz/cwVOD31+Hv59IwRwtLh4vf39PkvN3gkb0dQ2qCnC0aO2eLEG0aW40aOgUxtPR1Jki5MFQsAqUaQ4kmTBvDVBMjyEI0tQzDnPLtnPB7qGEXNFQNL7AfoAwdnQaIe2taGgshe9vbUsP7Ct+VrwFLxXCAd29qaU96g+Hy7B2T12g5V6LBVXiBb3Nq70bUBWJrDGdWL+xzJRuTaeYKw0V241fZedqKdpqIUziuLFi6oDCD/z1ak3dnH6HWTzEznGWu+CVUy2n0hk8UI4hgDx3WKmZGN2sTaPdhkMI8LooXpANUrCj9ri6iEexZnG9cq/0nL2ThyIHYBg700JJPbq6JbhoPbdtFj/Jd2UY1qIbS44KxH1dHd7R6KpxAabPYb3CMYxgPFev8ro7mKwblbea1L82MD6pZPJZmxtFy3aCc6bW61TBSunJqy0SxtJlxfr4jnB9Z3wE31r7MUOGdYp5xe1t1g20JPiiaWoyUMusN2FEM87DLUOc0lKAZxXCCRhSpCubXY2BqFOvH7Sn6n7tzlg9q/+Nq5dIf5m3lk6LuFcX17e3vUW2E+8+f+wbNGXWBXiG8ondZOMwV/Sl6n9wCPeiaUdR64iXzG+3RuUEUZszAPDpn/kJOsFNU2NqEr/VPhgp1X6QUPiiKP6CRDaFGEIVDKB9E6RDKBzHUJIx3iKZTyVo4IlsT2d+PfIPoG5NAgzDekwnuTuXzTI9krgn0/v4Tgu/zA3ZI3yE3Z1DnRyr5MxVqXkwRa2eI79hGpHZuYeYLfGUodMtdaxkKLkStZSjWr9HYdY/I7L7FmohTZNqKeolGKtVIdbpnDUW633qpVCqZss+XX4LILHqV0++IyCmYe7TAMiR2pqLd/FdEuvu/b7jV6NGMZBJvhH/fkP3/6lhkKHFC3GZOD5EY5qkm1i5HAwAAAAAAAAAAAAAAAAAAAACAJf4AKkJE8O36wbkAAAAASUVORK5CYII=')]"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                                <polyline points="6 7 12 13 18 7"></polyline>
                            </svg>
                        </button>
                        { !isProfileCollapsed && 
                            <div className="absolute text-xs p-4 bg-white -bottom-16 right-1/12 w-44 shadow-xl">
                                <p className="hover:bg-gray-100">Profile</p>
                                <p className="hover:bg-gray-100">Settings</p>
                            </div>
                        }					
                    </div>

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                            stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                            className="transform transition duration-300 hover:scale-105 cursor-pointer">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>					  
                    </div>
                </div>

                <div className="flex flex-col mt-12">
                    <Toolbar />
                </div>
            </div>

            <CourseEnv />
        </div>
    );
}

export default App;
