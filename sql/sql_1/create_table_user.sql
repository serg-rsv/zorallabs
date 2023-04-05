CREATE TABLE user (
  id INT PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  cultureID INT,
  deleted BIT,
  country VARCHAR(255),
  isRevokeAccess BIT,
  created DATETIME
);
