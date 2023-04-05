CREATE TABLE groupMembership (
  id INT PRIMARY KEY,
  userID INT,
  groupID INT,
  created DATETIME,
  FOREIGN KEY (userID) REFERENCES user(id),
  FOREIGN KEY (groupID) REFERENCES "group"(id)
);
