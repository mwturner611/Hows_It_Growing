USE howsitgrowing;

INSERT INTO users (emailAddress,password,createdAt,updatedAt) VALUES ('Kevon','password',now(),now());
INSERT INTO users (emailAddress,password,createdAt,updatedAt) VALUES ('Jane','secret',now(),now());

INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,createdAt,updatedAt,userId) VALUES ('fern','fernie',true,false,true,false,true,false,true,false,now(),now(),1);
INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,createdAt,updatedAt,userId) VALUES ('tree','branch',true,false,false,false,true,false,false,false,now(),now(),2);
INSERT INTO plants (plantType,nickName,sunday,monday,tuesday,wednesday,thursday,friday,saturday,watered,createdAt,updatedAt,userId) VALUES ('bush','wanda',false,true,false,true,false,false,true,false,now(),now(),1);

