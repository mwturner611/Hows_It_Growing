CREATE DATABASE howsitgrowing; 

USE howsitgrowing;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    emailAddress varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE plants(
    id int NOT NULL AUTO_INCREMENT,
    plantType varchar(255) NOT NULL,
    nickName varchar(255) NOT NULL,
    sunday boolean DEFAULT VALUE false,
    monday boolean DEFAULT VALUE false,
    tuesday boolean DEFAULT VALUE false,
    wednesday boolean DEFAULT VALUE false,
    thursday boolean DEFAULT VALUE false,
    friday boolean DEFAULT VALUE false,
    saturday boolean DEFAULT VALUE false,
    userId int NOT NULL,
    PRIMARY KEY (id)
)