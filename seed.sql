DROP TABLE IF EXISTS user_medicine;
DROP TABLE IF EXISTS medicine;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  age INTEGER
);

CREATE TABLE medicine(
  id SERIAL PRIMARY KEY,
  med_name VARCHAR(50),
  dose INTEGER
);

CREATE TABLE user_medicine(
  user_id INTEGER REFERENCES users(id),
  med_id INTEGER REFERENCES medicine(id)
);

INSERT INTO users(name, age) VALUES ('jake', 22);
INSERT INTO users(name, age) VALUES ('ryan', 45);
INSERT INTO users(name, age) VALUES ('flood', 33);
INSERT INTO users(name, age) VALUES ('lucia', 21);
INSERT INTO users(name, age) VALUES ('david', 50);

INSERT INTO medicine(med_name, dose) VALUES ('fun', 5);
INSERT INTO medicine(med_name, dose) VALUES ('cool', 2);
INSERT INTO medicine(med_name, dose) VALUES ('coding', 10);
INSERT INTO medicine(med_name, dose) VALUES ('poop', 2);

INSERT INTO user_medicine(user_id, med_id) VALUES (1,1);
INSERT INTO user_medicine(user_id, med_id) VALUES (1,2);
INSERT INTO user_medicine(user_id, med_id) VALUES (1,3);
INSERT INTO user_medicine(user_id, med_id) VALUES (2,1);
INSERT INTO user_medicine(user_id, med_id) VALUES (2,3);
INSERT INTO user_medicine(user_id, med_id) VALUES (3,4);
