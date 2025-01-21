import './Header.css';
import icone from '../assets/Google-meet.png';
import chat from '../assets/chat.png';
import dot from '../assets/dots.png';
import question from '../assets/question.png';
import setting from '../assets/setting.png';
import { useState, useEffect } from 'react';

function Header() {
    const [date, setDate] = useState(new Date().toLocaleDateString([], { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' }));
    const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    useEffect(() => { }, [date, time])

    const icons = [
        { src: question, alt: "Help" },
        { src: chat, alt: "Chat" },
        { src: setting, alt: "Settings" },
        { src: dot, alt: "More Options" },
    ];

    return (
        <header>
            <div>
                <img className="logo" src={icone} alt="Meet Icon" />
            </div>
            <nav aria-label="Main Navigation">
                <h3>{time} {date}</h3>
                <div className="img-section">
                    {icons.map((icon, index) => (
                        <a href="#" key={index}>
                            <img src={icon.src} alt={icon.alt} />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}
export default Header;