CREATE DATABASE my_database;

USE my_database;

CREATE TABLE blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

INSERT INTO blogs (title, content) VALUES ('Pengertian AI', 'Kecerdasan Buatan atau AI merujuk pada kemampuan mesin atau sistem komputer untuk meniru kecerdasan manusia dalam melakukan tugas tertentu.');
INSERT INTO blogs (title, content) VALUES ('Apa itu Web?', 'Web, yang sering disebut sebagai World Wide Web (WWW), adalah sistem informasi yang diakses melalui internet.');
INSERT INTO blogs (title, content) VALUES ('Apa itu Informatika?', 'Informatika adalah disiplin ilmu yang berfokus pada pengolahan informasi melalui komputer dan sistem komputasi.');

);
