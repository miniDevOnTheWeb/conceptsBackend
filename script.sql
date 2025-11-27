create database if not exists concepts_db;
use concepts_db;

-- db user

create user if not exists 'usuario_concepts'@'localhost' identified by 'usuario_concepts_958';
grant all privileges on concepts_db.* to 'usuario_concepts'@'localhost' with grant option;
flush privileges;

--tables

create table users (
  id binary(16) default(uuid_to_bin(uuid())) primary key,
  username varchar (30) unique,
  passwd varchar (200)
);

create table concepts (
  id binary(16) default(uuid_to_bin(uuid())) primary key,
  title varchar (200),
  text varchar (200),
  created_at timestamp default(current_timestamp),
  user_id binary (16),
  foreign key (user_id) references users (id) on delete cascade
);

-- procedures

delimiter $$
create procedure sp_register (
  in u_username varchar (100),
  in u_password varchar (200)
) 
begin
	insert into users (username, passwd) values (u_username, u_password);
end$$
delimiter ;

delimiter $$
create procedure sp_create_concept (
  in c_title varchar (100),
  in c_text varchar (200),
  in c_user_id varchar (36)
) 
begin
	insert into concepts (title, text, user_id) values (c_title, c_text, uuid_to_bin(c_user_id));
end$$
delimiter ;

-- views
create view view_concepts as 
select  bin_to_uuid(c.id) as id, c.title, c.text, bin_to_uuid(c.user_id) as user_id, u.username, c.created_at from concepts c
join users u on u.id = c.user_id;
