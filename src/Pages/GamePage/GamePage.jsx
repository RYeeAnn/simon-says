import './GamePage.scss';
import { useState, useEffect} from 'react';

function GamePage() {

    const COLORS = ['red', 'green', 'blue', 'yellow'];

    const [score, setScore] = useState(0);
    const [userInput, setUserInput] = useState([]);
    const [sequence, setSequence] = useState([]);
    const [flashColor, setFlashColor] = useState(null);


    // Start the game by generating the intial sequence
    useEffect(() => {
        generateSequence();
    },[]);



    const generateSequence = () => {
        const newColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        const newSequence = [...sequence, newColor];
        setSequence(newSequence);
        flashSequence(newSequence);
    };
    
    const flashSequence = (sequenceToFlash) => {
        let i = 0;
        const flashNextColor = () => {
            setFlashColor(null);
    
            setTimeout(() => {
                setFlashColor(sequenceToFlash[i]);
                i++;
    
                if (i < sequenceToFlash.length) {
                    setTimeout(flashNextColor, 1000); 
                } else {
                    setTimeout(() => {
                        setFlashColor(null);
                        setUserInput([]);
                    }, 500); 
                }
            }, 500);
        };
    
        flashNextColor();
    };
    
    const handleColorClick = (color) => {
        if (color === sequence[userInput.length]) {
            setUserInput((prevInput) => [...prevInput, color]);
    
            if (userInput.length === sequence.length - 1) {
                setScore(score + 1);
                setUserInput([]);
                generateSequence();
            }
        } else {
            alert(`Game over! Your score is ${score}`);
            setScore(0);
            // Explicitly reset sequence to a new random starting color
            const newStartColor = [COLORS[Math.floor(Math.random() * COLORS.length)]];
            setSequence(newStartColor);
            flashSequence(newStartColor);
            setUserInput([]);
        }
    };
    


    return (
        <div className="game-page">
            
            <div className="game-page__nav">
                <div className="game-page__score">
                    {score}
                </div>
            </div>

            <div className="game-page__circle">
                {COLORS.map((color) => (
                    <div
                        key={color}
                        className={`game-page__section game-page__${color} ${flashColor === color ? 'flash' : ''}`}
                        onClick={() => handleColorClick(color)}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default GamePage