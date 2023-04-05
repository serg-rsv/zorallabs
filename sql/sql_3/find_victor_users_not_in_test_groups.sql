SELECT firstName, lastName
FROM user
WHERE firstName = 'Victor'
  AND id NOT IN (
    SELECT userID
    FROM groupMembership
    WHERE groupID IN (
      SELECT id
      FROM "group"
      WHERE name LIKE 'TEST%-%'))
