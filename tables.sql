CREATE TABLE
IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    name TEXT
);

CREATE TABLE
IF NOT EXISTS dailylogs
(
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    mood_level INTEGER,
    illness_id INTEGER
);

CREATE TABLE
IF NOT EXISTS dailylogs
(
    id SERIAL PRIMARY KEY,
    user_name TEXT,
    diagnosis_id INTEGER,
    logs_id INTEGER
);

CREATE TABLE
IF NOT EXISTS diagnosis
(
    id SERIAL PRIMARY KEY,
    feeling TEXT,
    mood_level INTEGER
);

CREATE TABLE
IF NOT EXISTS logs
(
    id SERIAL PRIMARY KEY,
    name TEXT,
    log TEXT
);


CREATE TABLE
IF NOT EXISTS users_forums
(
    id SERIAL PRIMARY KEY,
    users_id INTEGER,
    forums_id INTEGER
);

CREATE TABLE
IF NOT EXISTS forums
(
    id SERIAL PRIMARY KEY,
    names TEXT
);