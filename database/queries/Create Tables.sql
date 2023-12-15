create table Users (
	ID int Primary Key Identity,
	email nvarchar(50) not null,
	UserPassword nvarchar(50) not null
);

create table Schedule (
	ID int Primary Key Identity,
	UserID int not null,
	Title nvarchar(50) not null,
	StartingTime datetime not null,
	EndingTime datetime not null,
	Note nvarchar(MAX)
);

create table Tasks (
	ID int Primary Key Identity,
	UserID int not null,
	ScheduleID int,
	ParentID int,
	Title nvarchar(100) not null,
	TaskDate datetime not null,
	DueDate datetime,
	Note nvarchar(MAX),
	FOREIGN KEY (UserID) REFERENCES Users(ID),
	FOREIGN KEY (ScheduleID) REFERENCES Schedule(ID),
	FOREIGN KEY (ParentID) REFERENCES Tasks(ID)
);

create table Reminders (
	ID int Primary Key Identity,
	UserID int not null,
	TaskID int,
	ScheduleID int,
	Alarm datetime not null,
	FOREIGN KEY (UserID) REFERENCES Users(ID),
	FOREIGN KEY (TaskID) REFERENCES Tasks(ID),
	FOREIGN KEY (ScheduleID) REFERENCES Schedule(ID)
);

create table Files (
	ID int Primary Key Identity,
	UserID int not null,
	TaskID int,
	ScheduleID int,
	Title nvarchar(MAX),
	FilePath nvarchar(MAX),
	FOREIGN KEY (UserID) REFERENCES Users(ID),
	FOREIGN KEY (TaskID) REFERENCES Tasks(ID),
	FOREIGN KEY (ScheduleID) REFERENCES Schedule(ID)
);