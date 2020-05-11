CREATE DATABASE howsitgrowing; 

USE howsitgrowing;

CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    userName varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
)

CREATE TABLE plants(
    id int NOT NULL AUTO_INCREMENT,
    plantType varchar(255) NOT NULL,
    nickName varchar(255) NOT NULL,
    waterDay1 varchar(20) NOT NULL,
    waterDay2 varchar,
    userId int NOT NULL,
    PRIMARY KEY (id)
)