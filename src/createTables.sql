USE react_crm;

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


-- insert into clients (c_name,email,firstContact ) values ("testName", "testEmail", NOW());


-- ALTER TABLE clients
-- ADD sale_status boolean;
-- DROP TABLE clients


-- create table email_type (
-- et_id int not null auto_increment primary key,
-- e_type varchar(30) UNIQUE
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
-- o_name varchar(30) UNIQUE
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
-- country varchar(50) not null UNIQUE
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
