create database pizzafactory;

use pizzafactory;

create table orders (

	-- Generate a unique 8 character order id for the order
	order_id int auto_increment,

	-- Your name as in your NRIC
	name varchar(128) not null,

	-- Your email, must be the same as LumiNUS
	email varchar(256) not null,

	-- 0 to 3
	pizza_size int not null,

	-- true for thick crust, false for thin crust pizza
	thick_crust boolean,

	-- One of the following: classic, signature, salsa, smoky, napolitana
	sauce varchar(32) not null,

	-- Comma separated values of one or more of the following:
	-- chicken, seafood, beef, vegetables, cheese, arugula, pineapple
	toppings text not null,

	-- Comments, optional
	comments text,

	primary key(order_id)
);
