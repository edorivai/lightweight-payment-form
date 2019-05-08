import React from "react";
import { Formik, Form, Field } from "formik";
import CitySearch from "./CitySearch";

export default function() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        address: "",
        country: "",
        city: "",
        shippingCost: "",
        cardName: "",
        cardNumber: "",
        cvv: "",
        agree: ""
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      render={props => (
        <Form>
          <ul className="flex-outer">
            <li>
              <label>First Name:</label>
              <Field placeholder="First Name" name="firstName" />
            </li>
            <li>
              <label for="last-name">Surname:</label>
              <Field placeholder="Last Name" name="lastName" />
            </li>
            <li>
              <label>Address:</label>
              <Field
                component="textarea"
                placeholder="Address"
                name="address"
              />
            </li>
            <li>
              <label>Shipping Information:</label>
              <Field component="select" name="country">
                <option value="Germany">Germany</option>
                <option value="Austria">Austria</option>
                <option value="Spain">Spain</option>
                <option value="France">France</option>
                <option value="UK">UK</option>
              </Field>

              <CitySearch />

              {/* <Field
                placeholder="Shipping cost"
                value={this.state.shippingCost}
                onChange={e => this.setState({ shippingCost: e.target.value })}
                className="shipping-cost"
              /> */}
            </li>
            <li style={{ alignItems: "normal" }}>
              <label>Payment method:</label>
              <ul>
                <li>
                  <Field
                    placeholder="Card name"
                    name="cardName"
                    style={{ marginLeft: "-40px", width: "36.2rem" }}
                  />
                </li>
                <li>
                  <Field
                    placeholder="Card number"
                    name="cardNumber"
                    style={{
                      marginLeft: "-40px",
                      marginTop: "20px",
                      width: "31.53rem"
                    }}
                  />
                  <input
                    placeholder="CVV"
                    name="cvv"
                    style={{
                      marginLeft: "10px",
                      marginTop: "20px",
                      width: "4rem"
                    }}
                  />
                </li>
              </ul>
            </li>
            <li style={{ alignItems: "normal" }}>
              <p>Agree terms and conditions</p>
              <ul>
                <li>
                  <Field
                    name="agree"
                    type="checkbox"
                    name="agree"
                    className="checkmark"
                  />
                </li>
              </ul>
            </li>
            <li>
              <button onClick={() => this.onSubmit()}>Send</button>
            </li>
          </ul>
        </Form>
      )}
    />
  );
}
