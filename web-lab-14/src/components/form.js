import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        city: "",
        webServer: "",
        role: "",
        signOn: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevData) => ({
                ...prevData,
                signOn: checked
                    ? [...prevData.signOn, value]
                    : prevData.signOn.filter((item) => item !== value),
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Form Submitted!!");
    };

    return (
        <form onSubmit={handleSubmit} >
            <h2>Novell Service Login</h2>

            <label >Username: </label>
            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
            <br /><br />

            <label>Password: </label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
            <br /><br />

            <label>City of Employment: </label>
            <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
            <br /><br />

            <label>Web Server: </label>
            <select id="webServer" name="webServer" value={formData.webServer} onChange={handleChange}>
                <option value="">--Choose a Server--</option>
                <option value="server1">Server 1</option>
                <option value="server2">Server 2</option>
                <option value="server3">Server 3</option>
                <option value="server4">Server 4</option>
                <option value="server5">Server 5</option>
            </select>
            <br /><br />

            <label>Please specify your role: </label>
            <br />
            <input type="radio" name="role" value="Admin" checked={formData.role === "Admin"} onChange={handleChange} /> Admin
            <br />
            <input type="radio" name="role" value="Engineer" checked={formData.role === "Engineer"} onChange={handleChange} /> Engineer
            <br />
            <input type="radio" name="role" value="Manager" checked={formData.role === "Manager"} onChange={handleChange} /> Manager
            <br />
            <input type="radio" name="role" value="Guest" checked={formData.role === "Guest"} onChange={handleChange} /> Guest
            <br /><br />

            <label>Single sign-on to the following: </label>
            <br />
            <input type="checkbox" name="signOn" value="Mail" checked={formData.signOn.includes("Mail")} onChange={handleChange} /> Mail
            <br />
            <input type="checkbox" name="signOn" value="Payroll" checked={formData.signOn.includes("Payroll")} onChange={handleChange} /> Payroll
            <br />
            <input type="checkbox" name="signOn" value="Self-Service" checked={formData.signOn.includes("Self-Service")} onChange={handleChange} /> Self-Service
            <br /><br />

            <button type="submit">Login</button>
            <button type="reset" onClick={() => setFormData({ username: "", password: "", city: "", webServer: "", role: "", signOn: [] })}>
                Reset
            </button>
        </form>
    );
}

export default Form;
