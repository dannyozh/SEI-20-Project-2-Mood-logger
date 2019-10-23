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
    users_name TEXT,
    mood_level INTEGER,
    illness_input TEXT,
    log TEXT,
    date TEXT
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