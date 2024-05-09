import React from "react";

const handleChange = (e) => {
    const state = sockAdded;
    const newState = {...state, [e.target.id]: e.target.value};
    setSockAdd(newState);
    console.log(sockAdded);


}
const AddSock = (props) => {
    return (
        <>
            <h5>Add Your Sock!</h5>

            <label for="UserID1">UserID</label>
            <input type="text" id="UserID1" name="userID" onChange={handleChange}></input>
            <label for="sockSize">Size</label>
            <input type="text" id="sockSize" name="SockSize" onChange={handleChange}></input>
            <label for="sockColor">Color</label>
            <input type="text" id="sockColor" name="SockColor" onChange={handleChange}></input>
            <label for="sockPattern">Pattern</label>
            <input type="text" id="sockPattern" name="SockPattern" onChange={handleChange}></input>
            <label for="sockMaterial">Material</label>
            <input type="text" id="sockMaterial" name="SockMaterial" onChange={handleChange}></input>
            <label for="sockCondition">Condition</label>
            <input type="text" id="sockCondition" name="SockCondition" onChange={handleChange}></input>
            <label for="sockForFoot">For Foot</label>
            <input type="text" id="sockForFoot" name="SockForFoot" onChange={handleChange}></input>

            <label for="checkWaterResistant">Water Resistant</label>
            <input type="checkBox" id="checkWaterResistant" checked="false" onChange={handleChange} />
            <label for="checkPadded">Padded</label>
            <input type="checkBox" id="checkPadded" checked="false" onChange={handleChange} />
            <label for="checkAntiBacterial">Anti Bacterial</label>
            <input type="checkBox" id="checkAntiBacterial" checked="false" onChange={handleChange} />

            <button type="button">Submit</button>



        </>
    );
};

export default AddSock