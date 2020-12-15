CREATE TABLE IF NOT EXISTS developer(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,skills TEXT,img TEXT);
INSERT or IGNORE INTO developer VALUES (1, 'Advanced Certified Hospice and Palliati...', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (2, 'Acute Care Nurse Practitioner', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (3, 'Adult Nurse Practitioner', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (4, 'Certified Dialysis Nurse', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (5, 'Certified Emergency Nurse', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (6, 'Certified Heart Failure Nurse', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (7, 'Licensed Practical Nurse', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (8, 'Pain Management Nursing', '987654321', '11/2021');
INSERT or IGNORE INTO developer VALUES (9, 'Trauma Certified Registered Nurse', '987654321', '11/2021');


CREATE TABLE IF NOT EXISTS product(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, creatorId INTEGER);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (1, 'Ionic Academy', 1);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (2, 'Software Startup Manual', 1);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (3, 'Ionic Framework', 2);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (4, 'Drifty Co', 2);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (5, 'Drifty Co', 3);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (6, 'Ionicons', 3);