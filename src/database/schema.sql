DROP DATABASE IF EXISTS todos;
CREATE DATABASE todo;

\c todos

CREATE TABLE todos (
id SERIAL PRIMARY KEY,
description TEXT NOT NULL,
is_completed BOOLEAN
);
