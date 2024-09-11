# Restaurant Management System

Welcome to the **Restaurant Management System** repository! This Python-based application is designed to manage restaurant operations, including orders, menu items, and reservations. The system is built with MongoDB as the backend database and follows the SOLID principles to ensure maintainability and scalability.

## Folder Structure

The project is organized as follows:

```
restaurant_management_system/
│
├── src/
│   ├── __init__.py
│   ├── main.py
│   ├── config/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   └── database.py
│   ├── controllers/
│   │   ├── __init__.py
│   │   ├── order_controller.py
│   │   ├── menu_controller.py
│   │   └── reservation_controller.py
│   ├── services/
│   │   ├── __init__.py
│   │   ├── order_service.py
│   │   ├── menu_service.py
│   │   └── reservation_service.py
│   ├── models/
│   │   ├── __init__.py
│   │   ├── order.py
│   │   ├── menu.py
│   │   └── reservation.py
│   ├── repositories/
│   │   ├── __init__.py
│   │   ├── order_repository.py
│   │   ├── menu_repository.py
│   │   └── reservation_repository.py
│   ├── utils/
│   │   ├── __init__.py
│   │   ├── validators.py
│   │   └── helpers.py
│   └── middlewares/
│       ├── __init__.py
│       ├── auth_middleware.py
│       └── logging_middleware.py
│
├── tests/
│   ├── __init__.py
│   ├── test_main.py
│   ├── test_controllers/
│   │   ├── __init__.py
│   │   ├── test_order_controller.py
│   │   ├── test_menu_controller.py
│   │   └── test_reservation_controller.py
│   ├── test_services/
│   │   ├── __init__.py
│   │   ├── test_order_service.py
│   │   ├── test_menu_service.py
│   │   └── test_reservation_service.py
│   ├── test_models/
│   │   ├── __init__.py
│   │   ├── test_order.py
│   │   ├── test_menu.py
│   │   └── test_reservation.py
│   └── test_repositories/
│       ├── __init__.py
│       ├── test_order_repository.py
│       ├── test_menu_repository.py
│       └── test_reservation_repository.py
│
├── docs/
│   ├── index.md
│   ├── setup.md
│   ├── usage.md
│   └── api_reference.md
│
├── .gitignore
├── README.md
├── requirements.txt
├── setup.py
├── .env
└── LICENSE
```

## Getting Started

To get started with the Restaurant Management System, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/username/restaurant-management-system.git
    ```

2. **Navigate to the Project Directory**:
    ```bash
    cd restaurant-management-system
    ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your environment-specific variables. You can refer to the `.env.example` file for sample configuration.

4. **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

5. **Run Migrations** (if applicable):
   Ensure that any initial setup or migrations for MongoDB are performed as described in `docs/setup.md`.

6. **Start the Application**:
    ```bash
    python src/main.py
    ```

## Folder Descriptions

- **`src/`**: Contains the application source code.
  - **`config/`**: Configuration files.
    - `settings.py`: General settings for the application.
    - `database.py`: MongoDB connection settings.
  - **`controllers/`**: Handles user requests and coordinates with services.
    - `order_controller.py`: Manages order-related endpoints.
    - `menu_controller.py`: Manages menu-related endpoints.
    - `reservation_controller.py`: Manages reservation-related endpoints.
  - **`services/`**: Contains business logic.
    - `order_service.py`: Business logic for orders.
    - `menu_service.py`: Business logic for menu management.
    - `reservation_service.py`: Business logic for reservations.
  - **`models/`**: Defines data models and schemas.
    - `order.py`: Order data model.
    - `menu.py`: Menu data model.
    - `reservation.py`: Reservation data model.
  - **`repositories/`**: Handles data persistence and MongoDB interactions.
    - `order_repository.py`: Data access methods for orders.
    - `menu_repository.py`: Data access methods for menu items.
    - `reservation_repository.py`: Data access methods for reservations.
  - **`utils/`**: Utility functions and helpers.
    - `validators.py`: Data validation functions.
    - `helpers.py`: General helper functions.
  - **`middlewares/`**: Middleware components for request processing.
    - `auth_middleware.py`: Authentication middleware.
    - `logging_middleware.py`: Logging middleware.

- **`tests/`**: Contains unit and integration tests, organized by component type.
  - **`test_controllers/`**: Tests for controller endpoints.
  - **`test_services/`**: Tests for service layer logic.
  - **`test_models/`**: Tests for data models.
  - **`test_repositories/`**: Tests for data access methods.

- **`docs/`**: Documentation files.
  - `index.md`: Overview and introduction.
  - `setup.md`: Setup and installation instructions.
  - `usage.md`: Usage guide and examples.
  - `api_reference.md`: API endpoints and reference.

## Dependencies

The project dependencies are listed in `requirements.txt`. Ensure you have these installed to run the application:

```bash
pip install -r requirements.txt
```

## Running Tests

To run the tests, use:

```bash
pytest
```

Ensure all dependencies are installed and the environment is properly configured before running the tests.





