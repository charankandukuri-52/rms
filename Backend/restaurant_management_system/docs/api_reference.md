# API Reference

## Overview

This document provides an overview of the API endpoints for the Restaurant Management System. The API supports management of restaurants, staff, users, assets, and menus, and includes functionality for calculating profits.

## Base URL

All API endpoints are relative to the base URL:

```
http://localhost:8000
```

## Endpoints

### 1. Restaurants

#### Create Restaurant

- **Endpoint**: `/restaurants/`
- **Method**: `POST`
- **Description**: Create a new restaurant.
- **Request Body**:

    ```json
    {
      "name": "Restaurant Name",
      "location": "City, Country",
      "contact_number": "string",
      "email": "email@example.com",
      "number_of_tables": 50
    }
    ```

- **Response**:

    - **Success (201 Created)**:

      ```json
      {
        "restaurant_id": "string",
        "name": "Restaurant Name",
        "location": "City, Country",
        "contact_number": "string",
        "email": "email@example.com",
        "number_of_tables": 50
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid request data"
      }
      ```

#### Get Restaurant by ID

- **Endpoint**: `/restaurants/{restaurant_id}`
- **Method**: `GET`
- **Description**: Retrieve a restaurant by its ID.
- **Path Parameters**:
  - `restaurant_id` (string): The ID of the restaurant to retrieve.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "restaurant_id": "string",
        "name": "Restaurant Name",
        "location": "City, Country",
        "contact_number": "string",
        "email": "email@example.com",
        "number_of_tables": 50
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Restaurant not found"
      }
      ```

#### Update Restaurant

- **Endpoint**: `/restaurants/{restaurant_id}`
- **Method**: `PUT`
- **Description**: Update an existing restaurant.
- **Path Parameters**:
  - `restaurant_id` (string): The ID of the restaurant to update.

- **Request Body**:

    ```json
    {
      "name": "Updated Restaurant Name",
      "location": "Updated City, Country",
      "contact_number": "string",
      "email": "email@example.com",
      "number_of_tables": 75
    }
    ```

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "restaurant_id": "string",
        "name": "Updated Restaurant Name",
        "location": "Updated City, Country",
        "contact_number": "string",
        "email": "email@example.com",
        "number_of_tables": 75
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Restaurant not found"
      }
      ```

#### Delete Restaurant

- **Endpoint**: `/restaurants/{restaurant_id}`
- **Method**: `DELETE`
- **Description**: Delete a restaurant by its ID.
- **Path Parameters**:
  - `restaurant_id` (string): The ID of the restaurant to delete.

- **Response**:

    - **Success (204 No Content)**: No content in response.

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Restaurant not found"
      }
      ```

### 2. Staff

#### Create Staff Member

- **Endpoint**: `/staff/`
- **Method**: `POST`
- **Description**: Create a new staff member.
- **Request Body**:

    ```json
    {
      "name": "Staff Name",
      "role": "Manager",
      "email": "email@example.com",
      "phone_number": "string",
      "restaurant_id": "string"
    }
    ```

- **Response**:

    - **Success (201 Created)**:

      ```json
      {
        "staff_id": "string",
        "name": "Staff Name",
        "role": "Manager",
        "email": "email@example.com",
        "phone_number": "string",
        "restaurant_id": "string"
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid request data"
      }
      ```

#### Get Staff Member by ID

- **Endpoint**: `/staff/{staff_id}`
- **Method**: `GET`
- **Description**: Retrieve a staff member by their ID.
- **Path Parameters**:
  - `staff_id` (string): The ID of the staff member to retrieve.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "staff_id": "string",
        "name": "Staff Name",
        "role": "Manager",
        "email": "email@example.com",
        "phone_number": "string",
        "restaurant_id": "string"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Staff member not found"
      }
      ```

#### Update Staff Member

- **Endpoint**: `/staff/{staff_id}`
- **Method**: `PUT`
- **Description**: Update an existing staff member.
- **Path Parameters**:
  - `staff_id` (string): The ID of the staff member to update.

- **Request Body**:

    ```json
    {
      "name": "Updated Staff Name",
      "role": "Senior Manager",
      "email": "updated_email@example.com",
      "phone_number": "string",
      "restaurant_id": "string"
    }
    ```

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "staff_id": "string",
        "name": "Updated Staff Name",
        "role": "Senior Manager",
        "email": "updated_email@example.com",
        "phone_number": "string",
        "restaurant_id": "string"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Staff member not found"
      }
      ```

#### Delete Staff Member

- **Endpoint**: `/staff/{staff_id}`
- **Method**: `DELETE`
- **Description**: Delete a staff member by their ID.
- **Path Parameters**:
  - `staff_id` (string): The ID of the staff member to delete.

- **Response**:

    - **Success (204 No Content)**: No content in response.

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Staff member not found"
      }
      ```

### 3. Users

#### Create User

- **Endpoint**: `/users/`
- **Method**: `POST`
- **Description**: Create a new user.
- **Request Body**:

    ```json
    {
      "username": "string",
      "password": "string",
      "email": "email@example.com",
      "role": "admin"  // or "user"
    }
    ```

- **Response**:

    - **Success (201 Created)**:

      ```json
      {
        "user_id": "string",
        "username": "string",
        "email": "email@example.com",
        "role": "admin"
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid request data"
      }
      ```

#### Get User by ID

- **Endpoint**: `/users/{user_id}`
- **Method**: `GET`
- **Description**: Retrieve a user by their ID.
- **Path Parameters**:
  - `user_id` (string): The ID of the user to retrieve.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "user_id": "string",
        "username": "string",
        "email": "email@example.com",
        "role": "admin"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "User not found"
      }
      ```

#### Update User

- **Endpoint**: `/users/{user_id}`
- **Method**: `PUT`
- **Description**: Update an existing user.
- **Path Parameters**:
  - `user_id` (string): The ID of the user to update.

- **Request Body**:

    ```json
    {
      "username": "updated_username",
      "email": "updated_email@example.com",
      "role": "user"  // or "admin"
    }
    ```

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "user_id": "string",
        "username": "updated_username",
        "email": "updated_email@example.com",
        "role": "user"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "User not found"
      }
      ```

#### Delete User

- **Endpoint**: `/users

/{user_id}`
- **Method**: `DELETE`
- **Description**: Delete a user by their ID.
- **Path Parameters**:
  - `user_id` (string): The ID of the user to delete.

- **Response**:

    - **Success (204 No Content)**: No content in response.

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "User not found"
      }
      ```

### 4. Assets

#### Create Asset

- **Endpoint**: `/assets/`
- **Method**: `POST`
- **Description**: Create a new asset for a restaurant.
- **Request Body**:

    ```json
    {
      "name": "Asset Name",
      "type": "Furniture",
      "value": 1000,
      "purchase_date": "YYYY-MM-DD",
      "restaurant_id": "string"
    }
    ```

- **Response**:

    - **Success (201 Created)**:

      ```json
      {
        "asset_id": "string",
        "name": "Asset Name",
        "type": "Furniture",
        "value": 1000,
        "purchase_date": "YYYY-MM-DD",
        "restaurant_id": "string"
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid request data"
      }
      ```

#### Get Asset by ID

- **Endpoint**: `/assets/{asset_id}`
- **Method**: `GET`
- **Description**: Retrieve an asset by its ID.
- **Path Parameters**:
  - `asset_id` (string): The ID of the asset to retrieve.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "asset_id": "string",
        "name": "Asset Name",
        "type": "Furniture",
        "value": 1000,
        "purchase_date": "YYYY-MM-DD",
        "restaurant_id": "string"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Asset not found"
      }
      ```

#### Update Asset

- **Endpoint**: `/assets/{asset_id}`
- **Method**: `PUT`
- **Description**: Update an existing asset.
- **Path Parameters**:
  - `asset_id` (string): The ID of the asset to update.

- **Request Body**:

    ```json
    {
      "name": "Updated Asset Name",
      "type": "Updated Type",
      "value": 1500,
      "purchase_date": "YYYY-MM-DD",
      "restaurant_id": "string"
    }
    ```

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "asset_id": "string",
        "name": "Updated Asset Name",
        "type": "Updated Type",
        "value": 1500,
        "purchase_date": "YYYY-MM-DD",
        "restaurant_id": "string"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Asset not found"
      }
      ```

#### Delete Asset

- **Endpoint**: `/assets/{asset_id}`
- **Method**: `DELETE`
- **Description**: Delete an asset by its ID.
- **Path Parameters**:
  - `asset_id` (string): The ID of the asset to delete.

- **Response**:

    - **Success (204 No Content)**: No content in response.

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Asset not found"
      }
      ```

### 5. Menus

#### Create Menu

- **Endpoint**: `/menus/`
- **Method**: `POST`
- **Description**: Create a new menu for a restaurant.
- **Request Body**:

    ```json
    {
      "restaurant_id": "string",
      "items": [
        {
          "name": "Dish Name",
          "description": "Dish Description",
          "price": 15.99
        }
      ]
    }
    ```

- **Response**:

    - **Success (201 Created)**:

      ```json
      {
        "menu_id": "string",
        "restaurant_id": "string",
        "items": [
          {
            "name": "Dish Name",
            "description": "Dish Description",
            "price": 15.99
          }
        ]
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid request data"
      }
      ```

#### Get Menu by ID

- **Endpoint**: `/menus/{menu_id}`
- **Method**: `GET`
- **Description**: Retrieve a menu by its ID.
- **Path Parameters**:
  - `menu_id` (string): The ID of the menu to retrieve.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "menu_id": "string",
        "restaurant_id": "string",
        "items": [
          {
            "name": "Dish Name",
            "description": "Dish Description",
            "price": 15.99
          }
        ]
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Menu not found"
      }
      ```

#### Update Menu

- **Endpoint**: `/menus/{menu_id}`
- **Method**: `PUT`
- **Description**: Update an existing menu.
- **Path Parameters**:
  - `menu_id` (string): The ID of the menu to update.

- **Request Body**:

    ```json
    {
      "restaurant_id": "string",
      "items": [
        {
          "name": "Updated Dish Name",
          "description": "Updated Description",
          "price": 19.99
        }
      ]
    }
    ```

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "menu_id": "string",
        "restaurant_id": "string",
        "items": [
          {
            "name": "Updated Dish Name",
            "description": "Updated Description",
            "price": 19.99
          }
        ]
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Menu not found"
      }
      ```

#### Delete Menu

- **Endpoint**: `/menus/{menu_id}`
- **Method**: `DELETE`
- **Description**: Delete a menu by its ID.
- **Path Parameters**:
  - `menu_id` (string): The ID of the menu to delete.

- **Response**:

    - **Success (204 No Content)**: No content in response.

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Menu not found"
      }
      ```

### 6. Profit Calculation

#### Calculate Profit

- **Endpoint**: `/profits/`
- **Method**: `GET`
- **Description**: Calculate the profit for a given restaurant within a specified time range.
- **Query Parameters**:
  - `restaurant_id` (string): The ID of the restaurant.
  - `start_date` (string, format: YYYY-MM-DD): The start date for profit calculation.
  - `end_date` (string, format: YYYY-MM-DD): The end date for profit calculation.

- **Response**:

    - **Success (200 OK)**:

      ```json
      {
        "restaurant_id": "string",
        "start_date": "YYYY-MM-DD",
        "end_date": "YYYY-MM-DD",
        "total_revenue": 10000.00,
        "total_costs": 6000.00,
        "profit": 4000.00
      }
      ```

    - **Error (400 Bad Request)**:

      ```json
      {
        "detail": "Invalid query parameters"
      }
      ```

    - **Error (404 Not Found)**:

      ```json
      {
        "detail": "Restaurant not found"
      }
      ```

