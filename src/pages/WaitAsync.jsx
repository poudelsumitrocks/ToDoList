import React from "react";

export default function WaitAsync() {
    
    function Hello(message, delay) {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log(message);
                resolve();
            }, delay);
        });
    }
    async function Async() {
        try {
            await Hello("Step 1:boilled water", 1000);
            await Hello("Step 2: milk added ", 2000);
            await Hello("Step 3: sugar added ", 2000);
            await Hello("Step 4: Tea ready", 2000);
        } catch (error) {
            console.log(error);
        }
    }
    return <div>
        <button onClick={Async}>Run Async</button>
        
    </div>;
}
