import "../styles/location.css";

const Location = () => {
    return (
        <div className="location-container">
            <div className="container">
                <h2>Select your location</h2>
                <select>
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="UK">United Kingdom</option>
                    <option value="France">France</option>
                    <option value="Spain">Spain</option>
                    <option value="Italy">Italy</option>
                    <option value="Canada">Canada</option>
                </select>
            </div>
        </div>
    );
}

export default Location;