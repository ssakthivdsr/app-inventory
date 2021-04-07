export interface businessapplication {
    name: string; // required field with minimum 5 characters
    addresses: Address[]; // user can have one or more addresses
}

export interface Address {
    street: string;  // required field
    postcode: string;
}