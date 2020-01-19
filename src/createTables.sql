USE react_crm;


-- Start here

-- DROP TABLE IF EXISTS clients,email_type,countries, owners;

-- create table email_type (
-- id int not null AUTO_INCREMENT primary key,
-- e_type varchar(40) UNIQUE
-- );

-- create table countries (
-- id int not null AUTO_INCREMENT primary key,
-- country varchar(40) UNIQUE
-- );

-- create table owners (
-- id int not null AUTO_INCREMENT primary key,
-- o_name varchar(40) UNIQUE
-- );

-- create table clients (
-- id int not null AUTO_INCREMENT primary key,
-- c_name varchar(40),
-- email varchar(40),
-- firstContact datetime not null,
-- sale_status boolean,

-- email_type int,
-- owner int,
-- country int,

-- foreign key (email_type) references email_type(id),
-- foreign key (owner) references owners(id),
-- foreign key (country) references countries(id) 
-- );

-- end here

-- DELETE FROM email_type;
-- DELETE FROM countries;
-- DELETE FROM owners;
-- DELETE FROM clients;

-- alter table foemail_typeo AUTO_INCREMENT = 1
-- alter table countries AUTO_INCREMENT = 1
-- alter table owners AUTO_INCREMENT = 1
-- alter table clients AUTO_INCREMENT = 1

-- TRUNCATE TABLE email_type;
-- TRUNCATE TABLE countries;
-- TRUNCATE TABLE owners;
-- TRUNCATE TABLE clients;

-- DROP TABLE clients
-- DROP TABLE email_type
-- DROP TABLE countries
-- DROP TABLE owners




-- foreign key (email_type) references email_type(id),
-- foreign key (owner) references owners(id),
-- foreign key (country) references countries(id) 
-- );


-- create table clients (
-- id int not null AUTO_INCREMENT primary key,
-- c_name varchar(30),
-- email varchar(30),
-- firstContact datetime not null
-- );

-- create table clients (
-- id int not null AUTO_INCREMENT primary key,
-- c_name varchar(40),
-- email varchar(40),
-- firstContact datetime not null,
-- sale_status boolean,

-- email_type varchar(40),
-- owner varchar(40),
-- country varchar(40),

-- foreign key (email_type) references email_type(e_type),
-- foreign key (owner) references owners(o_name),
-- foreign key (country) references countries(country) 
-- );

-- create table clients (
-- id int not null AUTO_INCREMENT primary key,
-- c_name varchar(40),
-- email varchar(40),
-- firstContact datetime not null,
-- sale_status boolean,

-- email_type int,
-- owner int,
-- country int,

-- foreign key (email_type) references email_type(id),
-- foreign key (owner) references owners(id),
-- foreign key (country) references countries(id) 
-- );

-- insert into clients (c_name,email,firstContact ) values ("testName", "testEmail", NOW());


-- ALTER TABLE clients
-- ADD sale_status boolean;
-- DROP TABLE clients


-- create table email_type (
-- id int not null auto_increment primary key,
-- e_type varchar(40) UNIQUE
-- );

-- create table email_type (
-- e_type varchar(40) UNIQUE
-- );

-- create table email_type (
-- e_type varchar(40) primary key
-- );


-- insert into email_type (e_type) values ("B");

-- ALTER TABLE email_type CHANGE `id` `id` int not null AUTO_INCREMENT;

-- DROP TABLE email_type


-- create table client_email_type(
--     c_id int,
--     et_id int,
--     foreign key (c_id) references clients(id) ,
--     foreign key (et_id) references email_type(id) 
-- )

-- DROP TABLE client_email_type


-- create table owners (
-- id int not null AUTO_INCREMENT primary key,
-- o_name varchar(40) UNIQUE
-- );

-- create table owners (
-- o_name varchar(40) UNIQUE
-- );

-- create table owners (
-- o_name varchar(40) primary key
-- );

-- DROP TABLE owners


-- create table client_owner(
--     c_id int,
--     o_id int,
--     foreign key (c_id) references clients(id) ,
--     foreign key (o_id) references owners(id) 
-- )

-- DROP TABLE client_owner


-- create table countries (
-- id int not null AUTO_INCREMENT primary key,
-- country varchar(40) UNIQUE
-- );

-- create table countries (
-- country varchar(50) not null UNIQUE
-- );

-- create table countries (
-- country varchar(50) UNIQUE
-- );

-- create table countries (
-- country varchar(50) primary key
-- );

-- DROP TABLE countries


-- create table client_country(
--     c_id int,
--     country_id int,
--     foreign key (c_id) references clients(id),
--     foreign key (country_id) references countries(id) 
-- )

-- DROP TABLE client_country

SELECT c.id, c.c_name, c.email, c.firstContact, c.sale_status, o.o_name, con.country, e.e_type
FROM clients as c
INNER JOIN owners as o
on c.owner = o.id
INNER JOIN countries as con
on c.country = con.id
INNER JOIN email_type as e
on c.email_type = e.id
ORDER BY c.id