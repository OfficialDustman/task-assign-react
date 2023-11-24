# Task Management System

## Overview

The Task Management System is a simple PHP-based application for managing tasks, projects, and user assignments. It uses a MySQL database to store information about users, teams, tasks, and projects. This system provides APIs for creating, editing, and deleting tasks and projects, as well as retrieving information about tasks based on user or team assignments.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, edit, and delete tasks
-Create, edit, and delete projects
- Assign tasks to one or more users
- Retrieve tasks based on user or team assignments
- Secure password handling (passwords are hashed using MD5)
- User authentication and authorization
- Team management
- Project-specific task assignments

## Requirements

- PHP 7.0 or later
- MySQL database
- Web server (e.g., Apache, Nginx)
- Node Package Manager (for managing react dependencies)

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/OfficialDustman/task-assign-react.git
   ```

2. Configure your database details:

   - Open `config.php` and update the database connection parameters (`$host`, `$dbname`, `$username`, `$password`) to match your setup.

3. Install dependencies:

   ```bash
   npm install
   ```

4. Import the database schema:

   - Execute the SQL script provided in the `database.sql` file to create the necessary tables.

5. Set up your web server to point to the project directory.

## Usage

1. Ensure that your web server and database server are running.

2. Access the application through your web browser.

3. Use the provided API endpoints to interact with the system programmatically.

## API Endpoints

- **Teams API**
  - GET `/api/getTeams`: Retrieve all teams.

- **User Profile API**
  - POST `/api/user/createUser`: Create a new user.
  - POST `/api/user/deleteUser`: Delete a user.
  - POST `/api/user/confirmUser`: Authenticate a user.
  - POST `/api/user/editUser`: Edit user details.

- **Tasks API**
  - POST `/api/task/createTask`: Create a new task.
  - POST `/api/task/editTask`: Edit task details.
  - POST `/api/task/deleteTask`: Delete a task.
  - POST `/api/task/getTasksByUser`: Retrieve tasks assigned to a user.
  - POST `/api/task/getTasksByTeam`:     Retrieve tasks assigned to a Team.

- **Projects API**
  - POST `/api/project/createProject`: Create a new project.
  - POST `/api/project/editProject`: Edit project details.
  - POST `/api/project/deleteProject`: Delete a project.
  - POST `/api/project/getProjects`: Retrieve projects based.

For detailed API documentation, refer to the API documentation provided in the code.

## Contributing

Feel free to contribute to the project. Fork the repository, create a branch, make your changes, and submit a pull request.

## License

This project is not currently licensed not under the [MIT License](LICENSE) - see the LICENSE file for details.
