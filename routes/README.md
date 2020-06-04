# Lion Store API Documentation #

## Authentication ##

Some routes require authentication to get a response. This app uses JSON Web Tokens (JWT). Once a user has signed up or logged in they are provided with an authentication token in the api response. This token must be included in the `Authourization` header in the form `Bearer <token-here>`.

Example with Fetch API:
````javascript
fetch('https://example.com/api/products', {
    headers: {
        Authourization: 'Bearer <token-here>'
    }
})
````


## User Routes ##

### Sign Up ###

| Endpoint | /api/users/signup |
| --- | --- |
| Method | `POST` |
| Token required | No |
| Admin only | No |

#### Parameters ####

| Parameter | Type | Required |
| --- | --- | --- |
| email | `String` (valid email address) | Yes |
| password | `String` | Yes |
| confirmpassword | `String` | Yes |

Example response:
````json
{
    "id": 2,
    "email": "ben@test.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJiZW5AdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MTE0NDAxNSwiZXhwIjoxNTkxMjMwNDE1fQ.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
````

### Login ###

| Endpoint | /api/users/login |
| --- | --- |
| Method | `POST` |
| Token required | No |
| Admin only | No |

#### Parameters ####

| Parameter | Type | Required |
| --- | --- | --- |
| email | `String` (valid email address) | Yes |
| password | `String` | Yes |

Example response:
````json
{
    "id": 2,
    "email": "ben@test.com",
    "role": "user",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJiZW5AdGVzdC5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTU5MTE0NDYzMiwiZXhwIjoxNTkxMjMxMDMyfQ.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
````

### Get Single User Information ###

| Endpoint | /api/users/:userId |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | Yes |

Example response:
````json
{
    "id": 1,
    "email": "ben@test.xyz",
    "role": "admin"
}
````

### Get Information of Authenticated User ###

| Endpoint | /api/users/ |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | No |

Example response:
````json
{
    "id": 1,
    "email": "ben@test.xyz",
    "role": "admin"
}
````

## Product Routes ##

### Create New Product ###

| Endpoint | /api/products/ |
| --- | --- |
| Method | `POST` |
| Token required | Yes |
| Admin only | Yes |

#### Parameters ####

| Parameter | Type | Required | Notes |
| --- | --- | --- | --- |
| name | `String` | Yes | |
| year | `Integer` | Yes | |
| format | `String` | No |  Default: DVD |
| description | `String` | No | |
| rating | `String` | No | |
| genre | `String` | No | Comma seperated list |
| director | `String` | No | |
| actors | `String` | No | Comma seperated list |
| image_url | `String` | No | Url to poster or box art |
| price | `Float` | Yes | Price in AUD dollars |
| quantity | `Integer` | Yes | |

Example response:
````json
{
    "isAvailable": true,
    "id": 3,
    "name": "Eraserhead",
    "image_url": "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "price": "1.00",
    "year": "1977",
    "quantity": "1",
    "description": "Henry Spencer tries to survive his industrial environment, his angry girlfriend, and the unbearable screams of his newly born mutant child.",
    "genre": "Horror",
    "actors": "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates",
    "director": "David Lynch",
    "rating": "David Lynch",
    "format": "VHS",
    "updatedAt": "2020-06-03T00:52:03.692Z",
    "createdAt": "2020-06-03T00:52:03.692Z"
}
````

### Update Existing Product ###

| Endpoint | /api/products/ |
| --- | --- |
| Method | `PUT` |
| Token required | Yes |
| Admin only | Yes |

#### Parameters ####

| Parameter | Type | Required | Notes |
| --- | --- | --- | --- |
| id | `Integer` | Yes | ID of product to update |
| name | `String` | No | |
| year | `Integer` | No | |
| format | `String` | No |  |
| description | `String` | No | |
| rating | `String` | No | |
| genre | `String` | No | Comma seperated list |
| director | `String` | No | |
| actors | `String` | No | Comma seperated list |
| image_url | `String` | No | Url to poster or box art |
| price | `Float` | No | Price in AUD dollars |
| quantity | `Integer` | No | |

Example response:
````json
{
    "success": "Succussfully updated product"
}
````

### Get Information For Single Product ###

| Endpoint | /api/products/:productId |
| --- | --- |
| Method | `GET` |
| Token required | No |
| Admin only | No |

Example response:
````json
{
    "id": 1,
    "name": "That Obscure Object of Desire",
    "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
    "price": 10.00,
    "year": 1977,
    "quantity": 10,
    "isAvailable": true,
    "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
    "genre": "Comedy, Drama",
    "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
    "director": "Luis Buñuel",
    "format": "DVD",
    "rating": "R",
    "createdAt": "2020-06-03T00:26:52.000Z",
    "updatedAt": "2020-06-03T00:26:52.000Z"
}
````

### Get All Products ###

| Endpoint | /api/products/ |
| --- | --- |
| Method | `GET` |
| Token required | No |
| Admin only | No |

Example response:
````json
[
    {
        "id": 1,
        "name": "That Obscure Object of Desire",
        "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "price": 10.00,
        "year": 1977,
        "quantity": 10,
        "isAvailable": true,
        "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        "genre": "Comedy, Drama",
        "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        "director": "Luis Buñuel",
        "format": "DVD",
        "rating": "R",
        "createdAt": "2020-06-03T00:26:52.000Z",
        "updatedAt": "2020-06-03T00:26:52.000Z"
    },
    {
        "id": 2,
        "name": "The Umbrellas of Cherbourg",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "price": 20.00,
        "year": 1964,
        "quantity": 2,
        "isAvailable": true,
        "description": "A young woman separated from her lover by war faces a life-altering decision.",
        "genre": "Drama, Musical, Romance",
        "actors": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        "director": "Jacques Demy",
        "format": "Blu-Ray",
        "rating": "PG",
        "createdAt": "2020-06-03T00:26:52.000Z",
        "updatedAt": "2020-06-03T00:26:52.000Z"
    },
    {
        "id": 3,
        "name": "Eraserhead",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMDExYzg5YjQtMzE0Yy00OWJjLThiZTctMWI5MzhjM2RmNjA4L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        "price": 1.00,
        "year": 1977,
        "quantity": 1,
        "isAvailable": true,
        "description": "New Description",
        "genre": "Horror",
        "actors": "Jack Nance, Charlotte Stewart, Allen Joseph, Jeanne Bates",
        "director": "David Lynch",
        "format": "VHS",
        "rating": "David Lynch",
        "createdAt": "2020-06-03T00:52:03.000Z",
        "updatedAt": "2020-06-03T00:55:10.000Z"
    }
]
````

## Cart Routes ##

### Add Product To Cart ###

| Endpoint | /api/cart/add/:productId |
| --- | --- |
| Method | `PUT` |
| Token required | Yes |
| Admin only | No |

Example response:
note: Returns all items in cart, not just product added to cart by request
````json
[
    {
        "productId": 1,
        "name": "That Obscure Object of Desire",
        "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "price": 10.00,
        "year": 1977,
        "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        "genre": "Comedy, Drama",
        "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        "director": "Luis Buñuel",
        "format": "DVD",
        "rating": "R",
        "quantity": 1
    },
    {
        "productId": 2,
        "name": "The Umbrellas of Cherbourg",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "price": 20.00,
        "year": 1964,
        "description": "A young woman separated from her lover by war faces a life-altering decision.",
        "genre": "Drama, Musical, Romance",
        "actors": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        "director": "Jacques Demy",
        "format": "Blu-Ray",
        "rating": "PG",
        "quantity": 1
    }
]
````

### Remove Product From Cart ###

| Endpoint | /api/cart/remove/:productId |
| --- | --- |
| Method | `DELETE` |
| Token required | Yes |
| Admin only | No |

Example response:

Note: Returns all items in cart after deletion. If more than 1 copy of the same movie is in the cart this method will delete them all, not just one.
````json
[
    {
        "productId": 2,
        "name": "The Umbrellas of Cherbourg",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "price": 20.00,
        "year": 1964,
        "description": "A young woman separated from her lover by war faces a life-altering decision.",
        "genre": "Drama, Musical, Romance",
        "actors": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        "director": "Jacques Demy",
        "format": "Blu-Ray",
        "rating": "PG",
        "quantity": 1
    }
]
````

### Update Cart Quantity ###

| Endpoint | /api/cart/update |
| --- | --- |
| Method | `PUT` |
| Token required | Yes |
| Admin only | No |

#### Parameters ####

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| productId | `Integer` | Yes | |
| newQuantity | `Integer` | Yes | Must be non-zero and positive |

Example response:

Note: Returns all items in cart after update.
````json
[
    {
        "productId": 1,
        "name": "That Obscure Object of Desire",
        "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "price": 10.00,
        "year": 1977,
        "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        "genre": "Comedy, Drama",
        "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        "director": "Luis Buñuel",
        "format": "DVD",
        "rating": "R",
        "quantity": 9
    }
]
````

### Get All Products In Cart ###

| Endpoint | /api/cart/ |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | No |

Example response:

````json
[
    {
        "productId": 1,
        "name": "That Obscure Object of Desire",
        "image_url": "https://m.media-amazon.com/images/M/MV5BNzY5NDZjNTEtMTVlZC00MzkxLTllNjQtZmQ5ODE3ZWQxNGM4XkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg",
        "price": 10.00,
        "year": 1977,
        "description": "Recounted in flashback are the romantic perils of Mathieu, a middle-aged French sophisticate as he falls for his nineteen year-old former chambermaid Conchita.",
        "genre": "Comedy, Drama",
        "actors": "Fernando Rey, Carole Bouquet, Ángela Molina, Julien Bertheau",
        "director": "Luis Buñuel",
        "format": "DVD",
        "rating": "R",
        "quantity": 9
    },
    {
        "productId": 2,
        "name": "The Umbrellas of Cherbourg",
        "image_url": "https://m.media-amazon.com/images/M/MV5BMWRkNWE1ZTMtY2ZhYy00NDFjLWI3ODktNDM4ZDIwOTMzNDQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "price": 20.00,
        "year": 1964,
        "description": "A young woman separated from her lover by war faces a life-altering decision.",
        "genre": "Drama, Musical, Romance",
        "actors": "Catherine Deneuve, Nino Castelnuovo, Anne Vernon, Marc Michel",
        "director": "Jacques Demy",
        "format": "Blu-Ray",
        "rating": "PG",
        "quantity": 1
    }
]
````

## Order Routes ##

### Create Order ###

Creates a new order with whatever items are in the authenticated users cart.

| Endpoint | /api/order/create |
| --- | --- |
| Method | `POST` |
| Token required | Yes |
| Admin only | No |

Example response:

````json
{
    "message": "Order placed successfully",
    "order": {
        "userId": 1,
        "orderId": 2,
        "total": 11000,
        "orderPlaced": "2020-06-03T01:11:55.000Z",
        "productsInOrder": [
            {
                "productId": 1,
                "name": "That Obscure Object of Desire",
                "format": "DVD",
                "individualCost": 10.00,
                "quantity": 9,
                "totalCost": 90.00
            },
            {
                "productId": 2,
                "name": "The Umbrellas of Cherbourg",
                "format": "Blu-Ray",
                "individualCost": 20.00,
                "quantity": 1,
                "totalCost": 20.00
            }
        ]
    }
}
````

### Get Single Order Information ###

| Endpoint | /api/order/:orderId |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | Yes |

Example response:

````json
{
    "userId": 1,
    "orderId": 2,
    "total": 11000,
    "orderPlaced": "2020-06-03T01:11:55.000Z",
    "productsInOrder": [
        {
            "productId": 1,
            "name": "That Obscure Object of Desire",
            "format": "DVD",
            "individualCost": 10.00,
            "quantity": 9,
            "totalCost": 90.00
        },
        {
            "productId": 2,
            "name": "The Umbrellas of Cherbourg",
            "format": "Blu-Ray",
            "individualCost": 20.00,
            "quantity": 1,
            "totalCost": 20.00
        }
    ]
}
````

### Get All Order Information ###

| Endpoint | /api/order/all |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | Yes |

Example response:

````json
[
    {
        "userId": 1,
        "orderId": 1,
        "total": 15000,
        "orderPlaced": "2020-06-03T00:26:52.000Z",
        "productsInOrder": [
            {
                "productId": 2,
                "name": "The Umbrellas of Cherbourg",
                "format": "Blu-Ray",
                "individualCost": 20.00,
                "quantity": 2,
                "totalCost": 40.00
            }
        ]
    },
    {
        "userId": 1,
        "orderId": 2,
        "total": 11000,
        "orderPlaced": "2020-06-03T01:11:55.000Z",
        "productsInOrder": [
            {
                "productId": 1,
                "name": "That Obscure Object of Desire",
                "format": "DVD",
                "individualCost": 10.00,
                "quantity": 9,
                "totalCost": 90.00
            },
            {
                "productId": 2,
                "name": "The Umbrellas of Cherbourg",
                "format": "Blu-Ray",
                "individualCost": 20.00,
                "quantity": 1,
                "totalCost": 20.00
            }
        ]
    }
]
````

### Get All Orders For Authenticated User ###

| Endpoint | /api/order/ |
| --- | --- |
| Method | `GET` |
| Token required | Yes |
| Admin only | No |

Example response:

````json
[
    {
        "userId": 1,
        "orderId": 1,
        "total": 15000,
        "orderPlaced": "2020-06-03T00:26:52.000Z",
        "productsInOrder": [
            {
                "productId": 2,
                "name": "The Umbrellas of Cherbourg",
                "format": "Blu-Ray",
                "individualCost": 20.00,
                "quantity": 2,
                "totalCost": 40.00
            }
        ]
    },
    {
        "userId": 1,
        "orderId": 2,
        "total": 11000,
        "orderPlaced": "2020-06-03T01:11:55.000Z",
        "productsInOrder": [
            {
                "productId": 1,
                "name": "That Obscure Object of Desire",
                "format": "DVD",
                "individualCost": 10.00,
                "quantity": 9,
                "totalCost": 90.00
            },
            {
                "productId": 2,
                "name": "The Umbrellas of Cherbourg",
                "format": "Blu-Ray",
                "individualCost": 20.00,
                "quantity": 1,
                "totalCost": 20.00
            }
        ]
    }
]
````
