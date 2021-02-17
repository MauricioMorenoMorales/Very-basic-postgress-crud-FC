create database library;

create table books(
	section int,
	title text,
	author text
);

insert into books values
    (2, 'Digital Fortress', 'Dan brown'),
    (3, 'World War Z', 'Max Brooks');

create table users(
    username text,
    password text
);

insert into users values
  ('joe', 'joe123'),
  ('ryan', 'ryan123'),
  ('cameron', 'cameron123');