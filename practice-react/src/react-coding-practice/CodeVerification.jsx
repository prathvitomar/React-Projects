import React, { useState, useRef } from 'react';

function CodeVerification() {
    const [digits, setDigits] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
    });

    // Create refs for each input field
    const firstRef = useRef();
    const secondRef = useRef();
    const thirdRef = useRef();
    const fourthRef = useRef();

    function handleDigit(value, field, nextFieldRef, prevFieldRef) {
        // Allow only one digit (0-9)
        if (!/^\d?$/.test(value)) return;

        // Update the specific field in the digits state
        setDigits((prevDigits) => ({
            ...prevDigits,
            [field]: value,
        }));

        // Move to next input if a digit is entered and it's not the last field
        if (value && nextFieldRef) {
            nextFieldRef.current.focus();
        }
    }

    function handleBackspace(e, field, prevFieldRef) {
        // If backspace is pressed and field is empty, move to the previous field
        if (e.key === 'Backspace' && !digits[field] && prevFieldRef) {
            prevFieldRef.current.focus();
        }
    }

    function submitCode() {
        let code = Object.values(digits).join('');
        console.log('Submitted Code:', code);
        // Here you can add code to validate the code (e.g., check against a hardcoded value)
        const hardcodedCode = '1234'; // Example hardcoded code
        if (code === hardcodedCode) {
            alert("Code is correct!");
        } else {
            alert("Incorrect code, please try again.");
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={digits.first}
                    onChange={(e) => handleDigit(e.target.value, 'first', secondRef)}
                    onKeyDown={(e) => handleBackspace(e, 'first')}
                    ref={firstRef}
                    maxLength="1"
                    style={{ width: '50px', textAlign: 'center' }}
                />
                <input
                    type="text"
                    value={digits.second}
                    onChange={(e) => handleDigit(e.target.value, 'second', thirdRef, firstRef)}
                    onKeyDown={(e) => handleBackspace(e, 'second', firstRef)}
                    ref={secondRef}
                    maxLength="1"
                    style={{ width: '50px', textAlign: 'center' }}
                />
                <input
                    type="text"
                    value={digits.third}
                    onChange={(e) => handleDigit(e.target.value, 'third', fourthRef, secondRef)}
                    onKeyDown={(e) => handleBackspace(e, 'third', secondRef)}
                    ref={thirdRef}
                    maxLength="1"
                    style={{ width: '50px', textAlign: 'center' }}
                />
                <input
                    type="text"
                    value={digits.fourth}
                    onChange={(e) => handleDigit(e.target.value, 'fourth', null, thirdRef)}
                    onKeyDown={(e) => handleBackspace(e, 'fourth', thirdRef)}
                    ref={fourthRef}
                    maxLength="1"
                    style={{ width: '50px', textAlign: 'center' }}
                />
            </div>
            <button onClick={submitCode} style={{ marginTop: '20px' }}>Submit</button>
        </div>
    );
}

export default CodeVerification;
