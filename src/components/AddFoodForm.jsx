import { useState } from "react";
import { Card, Col, Divider, Button, Input } from "antd";

export default function AddFoodForm(props) {
    const [formState, setFormState] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        //console.log("Form was prevented to submit");
        props.parentCB(formState);
        setFormState({});
        //console.log("SUBMIT ---------> ", formState)
    }

    function handleInput(event) {
        let { name, value  } = event.target;
        //if (type === "checkbox") value = checked;
        setFormState(Object.assign({}, formState, { [name]: value }));
        console.log(formState, event.target.name )
    }

    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <h2>Add food entry</h2>
            <label htmlFor="name">Name:</label>
            <Input
                type="text"
                name="name"
                placeholder="Name"
                value={formState.name || ""}
                onChange={handleInput}
            />

            <label htmlFor="name">Image:</label>
            <Input
                type="text"
                name="image"
                placeholder="http://i.igmur.com/RqUR3sE.png"
                value={formState.image || ""}
                onChange={handleInput}
            />

            <label htmlFor="name">Calories:</label>
            <Input
                type="number"
                name="calories"
                placeholder="85"
                value={formState.calories || ""}
                onChange={handleInput}
            />

            <label htmlFor="name">Servings:</label>
            <Input
                type="number"
                name="servings"
                placeholder="1"
                value={formState.servings || ""}
                onChange={handleInput}
            />

            <br />
            <button type="submit">Create</button>
        </form>
        </div>
    );
}
