USE howsitgrowing;

INSERT INTO users (emailAddress,password) VALUES ('Kevon','password');
INSERT INTO users (emailAddress,password) VALUES ('Jane','secret');

INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,userId) VALUES ('fern','fernie',true,false,true,false,true,false,true,false,1);
INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,userId) VALUES ('tree','branch',true,false,false,false,true,false,false,false,2);
INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,userId) VALUES ('bush','wanda',false,true,false,true,false,false,true,false,1);

