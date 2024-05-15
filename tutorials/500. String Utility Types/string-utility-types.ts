namespace StringUtilityTypes {
    
    type HttpMethod = 'GET' | 'POST' | 'DELETE';
    type LowercaseHttpMethod = Lowercase<HttpMethod>;

    const lowerGet: LowercaseHttpMethod = 'get';
    const upperGet: LowercaseHttpMethod = 'GET';
        // error TS2820: Type '"GET"' is not assignable to type 
        // '"get" | "post" | "delete"'. Did you mean '"get"'?        


    // they work with template literal types, too
    type User = 'Adam' | 'Amy';
    type PrefixedUser = `USR_${Uppercase<User>}`;

    const prefUser: PrefixedUser = 'USR_ADAM';
    const badPrefUser: PrefixedUser = 'USR_Adam';
        // error TS2820: Type '"USR_Adam"' is not assignable to type '"USR_ADAM" | "USR_AMY"'. Did you mean '"USR_ADAM"'?
    
}
