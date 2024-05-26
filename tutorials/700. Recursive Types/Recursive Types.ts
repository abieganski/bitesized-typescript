namespace RecursiveTypes {
    

    // when defining a type, you can reference the same type in the definition
    type ValueOrArray<T> = T | Array<ValueOrArray<T>>;


    // you can define a Json type like that:
    type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

    const json1: Json = {
        success: true,
        username: "adam",
        privileges: [
            "admin", "reviewer"
        ],
    };

    const jsonTopLevelArray: Json = [
        "adam",
        "amy"
    ];
        
}
