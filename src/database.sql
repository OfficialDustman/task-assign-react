CREATE TABLE teams (
    team_id INT AUTO_INCREMENT PRIMARY KEY,
    team_name VARCHAR(255) NOT NULL,
    team_description VARCHAR(255) NOT NULL
);

CREATE TABLE users (
    username VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(32) NOT NULL, -- Assuming MD5 hashing
    team_id INT,
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(255) NOT NULL,
    project_description VARCHAR(255) NOT NULL,
    team_id INT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (team_id) REFERENCES teams(team_id)
);

CREATE TABLE tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    task_name VARCHAR(255) NOT NULL,
    task_description VARCHAR(255) NOT NULL,
    project_id INT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(50),
    FOREIGN KEY (project_id) REFERENCES projects(project_id)
);

CREATE TABLE task_assignments (
    task_id INT,
    username VARCHAR(255),
    PRIMARY KEY (task_id, username),
    FOREIGN KEY (task_id) REFERENCES tasks(task_id),
    FOREIGN KEY (username) REFERENCES users(username)
);

-- Insert sample teams
INSERT INTO teams (team_name, team_description) VALUES
('Core Banking Support', 'Support for core banking operations'),
('Core Banking Integration', 'Integration of core banking systems'),
('Network Infrastructure', 'Management of network infrastructure'),
('Non-Core Banking', 'Support for non-core banking operations'),
('Software Engineering', 'Development of software applications'),
('Project Management', 'Management of projects'),
('Power', 'Management of power systems'),
('Control', 'Control and monitoring systems'),
('Cybersecurity', 'Security for IT systems'),
('Data Analysis and Science', 'Data analysis and scientific research');