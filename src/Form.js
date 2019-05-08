import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        city: '',
        shippingCost: '',
        cardName: '',
        cardNumber: '',
        cvv: '',
        agree: '',
    }

    onSubmit = () => {
        console.log(this.state);
    }

    render() {
        return(
            <form>
                <ul className="flex-outer">
                    <li>
                        <label>First Name:</label>
                        <input 
                            placeholder="First Name" 
                            value={this.state.firstName} 
                            onChange={e => this.setState({ firstName: e.target.value })} 
                        />
                    </li>
                    <li>
                        <label for="last-name">Surname:</label>
                        <input 
                            placeholder="Last Name" 
                            value={this.state.lastName} 
                            onChange={e => this.setState({ lastName: e.target.value })} 
                        />
                    </li>       
                    <li>
                        <label>Address:</label>
                        <textarea
                            placeholder="Address" 
                            value={this.state.address} 
                            onChange={e => this.setState({ address: e.target.value })} 
                        />
                    </li>
                    <li>
                        <label>Shipping Information:</label>
                        <select value={this.state.country} onChange={e => this.setState({ country: e.target.value })} >
                            <option value="Germany">Germany</option>
                            <option value="Austria">Austria</option>
                            <option value="Spain">Spain</option>
                            <option value="France">France</option>
                            <option value="UK">UK</option>
                        </select>
                
                        <input 
                            placeholder="City" 
                            value={this.state.city} 
                            onChange={e => this.setState({ city: e.target.value })} 
                        />
                
                        <input 
                            placeholder="Shipping cost" 
                            value={this.state.shippingCost} 
                            onChange={e => this.setState({ shippingCost: e.target.value })} 
                            className="shipping-cost"
                        />
                    </li>
                    <li style={{alignItems: 'normal'}}>
                        <label>Payment method:</label>
                        <ul>
                            <li>
                                <input 
                                    placeholder="Card name" 
                                    value={this.state.cardName} 
                                    onChange={e => this.setState({ cardName: e.target.value })} 
                                    style={{marginLeft: '-40px', width: '36.2rem'}}
                                />
                            </li>
                            <li>
                                <input 
                                    placeholder="Card number" 
                                    value={this.state.cardNumber} 
                                    onChange={e => this.setState({ cardNumber: e.target.value })} 
                                    style={{marginLeft: '-40px', marginTop: '20px', width: '31.53rem'}}
                                />
                                <input 
                                    placeholder="CVV" 
                                    value={this.state.cvv} 
                                    onChange={e => this.setState({ cvv: e.target.value })} 
                                    style={{marginLeft: '10px', marginTop: '20px', width: '4rem'}}
                                />
                            </li>
                        </ul>    
                    </li>
                    <li style={{alignItems: 'normal'}}>
                        <p>Agree terms and conditions</p>
                        <ul>
                            <li>
                                <input
                                    name="agree"
                                    type="checkbox"
                                    checked={this.state.agree}
                                    onChange={e => this.setState({ agree: e.target.checked })} 
                                    className="checkmark"
                                />
                            </li>
                        </ul>
                    </li>
                    <li><button onClick={() => this.onSubmit()}>Send</button></li>
                </ul>
            </form>
        )
    }
}

