drop database if exists api_web;

create database if not exists api_web;

use api_web;

drop table if exists users;

drop table if exists products;

create table users (
	id		int		auto_increment		primary key,
    name	varchar(100),
    email	varchar(250),
    pass	varchar(256),
    photo	varchar(600)
);

create table products (
	id					int 			auto_increment		primary key,
    name				varchar(250),
    quant				int,
    price				varchar(200)
);

create table sessions (
	id			int					auto_increment			primary key,
    token		varchar(300)		unique,
    id_users	int,
	constraint 	fk_id_users			foreign key(id)			references users(id)
);

insert into users (name, email, pass, photo) values ('Angelo', 'angelogm2005@gmail.com', 123, "https://avatars.githubusercontent.com/u/130395807?v=4");

insert into users (name, email, pass, photo) values ('Luiz', 'luizIFSP@gmail.com', 143, "https://avatars.githubusercontent.com/u/127341699?v=4");

insert into users (name, email, pass, photo) values ('Anne', 'anneIFSP@gmail.com', 321, "https://avatars.githubusercontent.com/u/124811095?v=4");

insert into users (name, email, pass, photo) values ('leo', 'leoIFSP@gmail.com', 101, "https://avatars.githubusercontent.com/u/126820929?v=4");

insert into users (name, email, pass, photo) values ('Renan Cavichi', "renanCavichi@gmail.com", 928, "https://avatars.githubusercontent.com/u/4259630?s=100&v=4");

select * from users;

insert into products (name, quant, price) values ('mouse', '12', '20,00R$');

select * from products;