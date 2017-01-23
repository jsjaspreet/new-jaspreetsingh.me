create table workouts (
  id serial primary key,
  workout varchar(128) not null,
  workout_date date not null,
  duration interval not null,
  calories int not null,
  fat_burn_time interval not null,
  fitness_time interval not null,
  avg_heart_rate int not null,
  max_heart_rate int not null,
  workout_type varchar(8) not null
);

insert into "workouts" ("workout", "workout_date", "duration",
                        "calories", "fat_burn_time", "fitness_time",
                        "avg_heart_rate", "max_heart_rate", "workout_type")
values
('CHEST_ABS',
 '12/18/16',
 'PT57M39S',
 481,
 'PT36M42S',
 'PT20M48S',
 123,
 172,
 'RES');

