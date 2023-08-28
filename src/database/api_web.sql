drop database if exists api_web;

create database if not exists api_web;

use api_web;

drop table if exists users;

create table users (
	id		int		auto_increment		primary key,
    name	varchar(100),
    email	varchar(250),
    pass	varchar(256)
);

insert into users (name, email, pass) values ('Angelo', 'angelogm2005@gmail.com', 123);

insert into users (name, email, pass) values ('Luiz', 'luizIFSP@gmail.com', 143);

insert into users (name, email, pass) values ('Anne', 'anneIFSP@gmail.com', 321);

insert into users (name, email, pass) values ('leo', 'leoIFSP@gmail.com', 101);

select * from users;