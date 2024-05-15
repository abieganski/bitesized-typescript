namespace TemplateLiteralTypes {

    // template literal example:

    const name: string = 'Adam';
    const message: string = `Welcome to TypeScript, ${name}`;

    console.log(message);
            // Welcome to TypeScript, Adam



    // template literal type example:

    type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
    type ResourceName = 'users' | 'posts' | 'comments';

    type ApiEndpoint<
        Method extends HttpMethod,
        Resource extends ResourceName
    > = `${Method} /api/${Resource}`

    type GetUsersEndpoint = ApiEndpoint<'GET', 'users'>;
    type GetPostsEndpoint = ApiEndpoint<'GET', 'posts'>;

    type Api = GetUsersEndpoint | GetPostsEndpoint;

    async function fetch(endpoint: Api): Promise<any> {
        return true;  // not implemented properly
    }


    const endpoint: GetUsersEndpoint = 'GET /api/users';

    const badEndpoint: GetUsersEndpoint = 'GET /api/user';
            // error TS2322: Type '"GET /api/user"' is not assignable to type '"GET /api/users"'.
    const badEndpoint2: GetUsersEndpoint = 'get /api/users';
            // error TS2322: Type '"get /api/users"' is not assignable to type '"GET /api/users"'.
    
    fetch(endpoint);

}
