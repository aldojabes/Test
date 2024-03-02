import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS file for styling
import nationalities from "./assets/nationalities";
import rwandaDistricts from "./assets/districts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [citizenship, setCitizenship] = useState("");
  const handleCitizenshipChange = (e) => {
    setCitizenship(e.target.value);
  };
  const [nationality, setNationality] = useState("");

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictChange = (e) => {
    setSelectedDistrict(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;
    // Check if input is a number
    if (/^\d*$/.test(input) || input === "") {
      setPhoneNumber("+250" + input);
    }
  };

  const [tinNumber, setTinNumber] = useState("");
  const handleTinNumberChange = (e) => {
    const input = e.target.value;
    setTinNumber(input);
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [purpose, setPurpose] = useState("");
  const [otherPurpose, setOtherPurpose] = useState("");

  const handlePurposeChange = (e) => {
    const selectedPurpose = e.target.value;
    setPurpose(selectedPurpose);
    // If "Other" is selected, clear the otherPurpose state
    if (selectedPurpose !== "Other") {
      setOtherPurpose("");
    }
  };

  const handleOtherPurposeChange = (e) => {
    setOtherPurpose(e.target.value);
  };

  const [productCategory, setProductCategory] = useState("");
  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const [weight, setWeight] = useState("");

  const handleWeightChange = (e) => {
    const input = e.target.value;
    // Check if input is a positive number
    if (/^[0-9]*\.?[0-9]*$/.test(input) || input === "") {
      setWeight(input);
    }
  };
  const [description, setDescription] = useState("");

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const [unitOfMeasurement, setUnitOfMeasurement] = useState("");

  const handleUnitOfMeasurementChange = (e) => {
    setUnitOfMeasurement(e.target.value);
  };
  const [quantity, setQuantity] = useState("");

  const handleQuantityChange = (e) => {
    const input = e.target.value;
    // Check if input is a positive integer
    if (/^[1-9][0-9]*$/.test(input) || input === "") {
      setQuantity(input);
    }
  };

  const [nationalId, setNationalId] = useState("");
  const [passport, setPassport] = useState("");

  const handleNationalIdChange = (e) => {
    const value = e.target.value;
    setNationalId(value);
  };

  const handlePassportChange = (e) => {
    const value = e.target.value;
    setPassport(value);
  };

  const [otherNames, setOtherNames] = useState("");
  const [surname, setSurname] = useState("");

  const handleOtherNamesChange = (e) => {
    const value = e.target.value;
    // Validate Other names here if needed
    setOtherNames(value);
  };

  const handleSurnameChange = (e) => {
    const value = e.target.value;
    // Validate Surname here if needed
    setSurname(value);
  };
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    // Validate email format here if needed
    setEmail(value);
  };

  const [businessType, setBusinessType] = useState("");

  const handleBusinessTypeChange = (e) => {
    const value = e.target.value;
    // Validate business type here if needed
    setBusinessType(value);
  };

  const [companyName, setCompanyName] = useState("");

  const handleCompanyNameChange = (e) => {
    const value = e.target.value;
    // Validate company name here if needed
    setCompanyName(value);
  };
  const [productName, setProductName] = useState("");

  const handleProductNameChange = (e) => {
    const value = e.target.value;
    // Validate product name here if needed
    setProductName(value);
  };
  const gatherInputValues = () => {
    return {
      personalDetails: {
        citizenship: citizenship,
        phoneNumber: phoneNumber,
        nationalId: nationalId,
        passport: passport,
        nationality: nationality,
        otherNames: otherNames,
        surname: surname,
        email: email,
      },
      addressDetails: {
        selectedDistrict: selectedDistrict,
      },
      businessDetails: {
        tinNumber: tinNumber,
        selectedDate: selectedDate,
        purpose: purpose,
        otherPurpose: otherPurpose,
        businessType: businessType,
        companyName: companyName,
      },
      productDetails: {
        productCategory: productCategory,
        weight: weight,
        description: description,
        unitOfMeasurement: unitOfMeasurement,
        quantity: quantity,
        productName: productName,
      },
    };
  };
  const handleSubmit = () => {
    const inputData = gatherInputValues();

    console.log(inputData);

    fetch("http://localhost:3000/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  return (
    <div className="container">
      <div className="group">
        <div className="title-container bg-lightblue">
          <h1 className="title">Business owner details</h1>
        </div>
        <form className="form-container">
          <h3 className="title">Business owner details</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="citizenship">Citizenship</label>
                <select
                  className="form-control"
                  id="citizenship"
                  value={citizenship}
                  onChange={handleCitizenshipChange}
                  required
                >
                  <option>Choose citizenship</option>
                  <option value="Rwandan">Rwandan</option>
                  <option value="Foreigner">Foreigner</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              {citizenship === "Rwandan" && (
                <div className="form-group">
                  <label htmlFor="nationalId">National ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nationalId"
                    value={nationalId}
                    onChange={handleNationalIdChange}
                    placeholder="Enter National ID"
                    maxLength="16"
                    required // Set maximum length to 16 characters
                  />
                </div>
              )}
              {citizenship === "Foreigner" && (
                <div className="form-group">
                  <label htmlFor="passport">Passport number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="passport"
                    value={passport}
                    onChange={handlePassportChange}
                    placeholder="Enter Passport number"
                    maxLength="15"
                    required // Set maximum length to 15 characters
                  />
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="otherNames">Other names *</label>
                <input
                  type="text"
                  className="form-control"
                  id="otherNames"
                  value={otherNames}
                  onChange={handleOtherNamesChange}
                  placeholder="Enter Other names"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="surname">Surname *</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  value={surname}
                  onChange={handleSurnameChange}
                  placeholder="Enter Surname"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="citizenship">Nationality</label>
              <select
                className="form-control"
                id="citizenship"
                value={nationality}
                onChange={handleNationalityChange}
                required
              >
                <option value="">Select Citizenship</option>
                {nationalities.map((nationality) => (
                  <option key={nationality.value} value={nationality.value}>
                    {nationality.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="tel">Phone number</label>
              <div className="form-group input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">+250</span>
                </div>
                <input
                  type="tel"
                  className="form-control"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="78123-----"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter email"
                  required
                />
              </div>
            </div>
          </div>
          <h3 className="title">Business owner address</h3>
          <div className="form-group">
            <label htmlFor="district">Location</label>
            <select
              className="form-control"
              id="district"
              value={selectedDistrict}
              onChange={handleDistrictChange}
              required
            >
              <option value="">Select District</option>
              {rwandaDistricts.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-6"></div>
        </form>
      </div>
      <div className="group">
        <div className="title-container bg-lightblue">
          <h1 className="title">Business Details</h1>
        </div>
        <form className="form-container">
          <h3 className="title">Business details</h3>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="businessType">Business Type *</label>
              <select
                className="form-control"
                id="businessType"
                value={businessType}
                onChange={handleBusinessTypeChange}
                required
              >
                <option value="" disabled selected>
                  Business Type
                </option>
                <option value="Retailer">Retailer</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Manufacturer">Manufacturer</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="companyName">Company name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  value={companyName}
                  onChange={handleCompanyNameChange}
                  placeholder="Enter company name"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="lastName">TIN number</label>
                <input
                  type="text"
                  className="form-control"
                  id="tinNumber"
                  value={tinNumber}
                  onChange={handleTinNumberChange}
                  placeholder="123456789"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="companyName">Registration date</label>
                <div>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    className="form-control col-md-6"
                    id="companyName"
                    placeholderText="Select date"
                    dateFormat="dd/MM/yyyy"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="title">Business address</h3>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="district">Location</label>
              <select
                className="form-control"
                id="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
              >
                <option value="">Select District</option>
                {rwandaDistricts.map((district, index) => (
                  <option key={index} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="group">
        <div className="title-container bg-lightblue">
          <h1 className="title">Product information</h1>
        </div>
        <form className="form-container">
          <h3 className="title">Importation details</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="purpose">Purpose of Importation</label>
                <select
                  className="form-control"
                  id="purpose"
                  value={purpose}
                  onChange={handlePurposeChange}
                >
                  <option value="" disabled selected>
                    Select Purpose
                  </option>
                  <option value="Direct sale">Direct sale</option>
                  <option value="Personal use">Personal use</option>
                  <option value="Trial use">Trial use</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              {purpose === "Other" && (
                <div className="form-group">
                  <label htmlFor="otherPurpose">
                    Specify purpose of importation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otherPurpose"
                    value={otherPurpose}
                    onChange={handleOtherPurposeChange}
                    placeholder="Specify purpose"
                  />
                </div>
              )}
            </div>
          </div>
          <h3 className="title">Product details</h3>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="productCategory">Product Category</label>
                <select
                  className="form-control"
                  id="productCategory"
                  value={productCategory}
                  onChange={handleProductCategoryChange}
                >
                  <option value="" disabled selected>
                    Select Product Category
                  </option>
                  <option value="General purpose">General purpose</option>
                  <option value="Construction materials">
                    Construction materials
                  </option>
                  <option value="Chemicals">Chemicals</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="productName">Product name *</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={handleProductNameChange}
                  placeholder="Enter product name"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="weight">Weight (kg)</label>
              <input
                type="number"
                className="form-control"
                id="weight"
                value={weight}
                onChange={handleWeightChange}
                min="0"
                step="any"
                placeholder="Enter weight"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="unitOfMeasurement">Unit of Measurement</label>
                <select
                  className="form-control"
                  id="unitOfMeasurement"
                  value={unitOfMeasurement}
                  onChange={handleUnitOfMeasurementChange}
                >
                  <option value="" disabled selected>
                    Select Unit
                  </option>
                  <option value="kg">kg</option>
                  <option value="tonnes">tonnes</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="quantity">Quantity of Product(s)</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                  placeholder="Enter quantity"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of Products</label>
            <textarea
              className="form-control"
              id="description"
              rows="4"
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter description"
            ></textarea>
          </div>
        </form>
      </div>
      <div className="text-center mt-3">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
